import { blogs, roadFotos, services } from "../server/server"

export const getServicesData=()=>{
      return services()
}
export const getRoadFotosData=()=>{
      return roadFotos()
}
export const getBlogs=()=>{
      return blogs()
}