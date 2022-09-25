import {fetchdata} from "../../utils/db"

const checkUserQuery = `select * from users where id = $1`

export const checkUser = (id)=> fetchdata(checkUserQuery,id)