// Nomenclatura de variáveis

const users = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getData(req, res) {
  const githubOfUsername = String(req.query.username)

  if (!githubOfUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const userGithubResponse = await fetch(`https://api.github.com/users/${githubOfUsername}`);

  if (userGithubResponse.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubOfUsername}" not found`
    })
  }

  const user = await userGithubResponse.json()

  const orderUsers = users.sort((a, b) =>  b.followers - a.followers); 

  const category = orderUsers.find(follower => user.followers > follower.followers)

  const userCategory = {
    githubOfUsername,
    category: category.title
  }

  return userCategory
}

getData({ query: {
  username: 'josepholiveira'
}}, {})