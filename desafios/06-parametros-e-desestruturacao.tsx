function updateUserRoute({body, params}){
  const {name,email,password}=body;
  const {id}=params
  updateUserController({name,email,password},{id:1})
}

function updateUserController({data, params}){
  const {name,email,password}=data;
  const {id}=params
  userRepository.update({name,email,password},{id:1})
}

const userRepository = {
  update:({data, params}) =>{
    return {
      data:{name,email,password},
      params:{id}
    }
  },
}