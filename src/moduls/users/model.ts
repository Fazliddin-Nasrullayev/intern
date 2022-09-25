import {fetchdata} from '../../utils/db'

const CreateUserQuery = `insert into users(first_name, last_name, age) values ($1, $2, $3) returning *`;


export const CreateUser = (first_name, last_name, age) => fetchdata(CreateUserQuery, first_name, last_name, age) 

const DeleteUserQuery = `delete from users where id = $1 returning *`

export const DeleteUser = (id) => fetchdata(DeleteUserQuery, id)

const GetUsersQuery = `
select u.id, u.first_name, u.last_name, u.age, u.created_at, 
COALESCE(json_agg(b) FILTER (WHERE b.title IS NOT NULL), '[]') as books
from users u 
left join
users_books u_b on u.id = u_b.user_id
left join
books b on u_b.book_id = b.id
group by u.id
`

export const GetUsers = () => fetchdata(GetUsersQuery)

const GetUserQuery = `
select u.id, u.first_name, u.last_name, u.age, u.created_at, 
COALESCE(json_agg(b) FILTER (WHERE b.title IS NOT NULL), '[]') as books
from users u 
left join
users_books u_b on u.id = u_b.user_id
left join
books b on u_b.book_id = b.id
where u.id = $1
group by u.id
`

export const GetUser = (id) => fetchdata(GetUserQuery, id)

const UpdateUserQuery = `update users set first_name = $1, last_name = $2, age = $3 where id = $4 returning *`

export const UpdateUser = (newname, newlastname, newage, id) => fetchdata(UpdateUserQuery, newname, newlastname, newage, id)

