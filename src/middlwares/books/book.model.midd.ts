import {fetchdata} from "../../utils/db"

const checkBookQuery = `select * from books where id = $1`

export const checkBook = (id)=> fetchdata(checkBookQuery,id)