import { altFotos, blogs, chFotos, diagnostics, roadFotos, services, stFotos } from "../server/server"

export const getServicesData=()=>{
      return services()
}
export const getRoadFotosData=()=>{
      return roadFotos()
}
export const getBlogs=()=>{
      return blogs()
}
export const getStFotosData=()=>{
      return stFotos()
}
export const getAltFotosData=()=>{
      return altFotos()
}
export const getChFotosData=()=>{
      return chFotos()
}

export const getDataDiagnostics=(page)=>{
      return diagnostics(page)
}