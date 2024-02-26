// Boleanos

const user = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: true,
}

const necessaryHeightForEnterToy = 130

const currentHour = new Date().getHours()

const isparkOpen = currentHour > 9 && currentHour < 18

if (!isparkOpen) {
  throw new Error('O parque está fechado!')
}

const userHasticket = user.hasTicket

if (!userHasticket) {
  throw new Error('O Diego não possui um bilhete para entrar no parque!')
}

const isUserHabilityForEnterToy = user.height > necessaryHeightForEnterToy

if (!isUserHabilityForEnterToy) {
  throw new Error('O Diego não pode entrar no brinquedo!')
} 

console.log('O Diego se divertiu muito! :)')