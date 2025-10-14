import Mock_Data from "../../Data/Mock_Data.json"


export  const pedirDatos =()=>{
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(Mock_Data)
    },1000)
  })
}


export const pedirProductosPorId = (id)=>{
  return new Promise((resolve) => {
    setTimeout(()=>{
    resolve(Mock_Data.find((prod) =>prod.id===id))
    },1000)
    })
}





