import {Router} from "express"
import {Users} from '../moduls/users/index'
import {Books} from '../moduls/books/index'
import {BookMiddleware} from '../middlwares/books/book.middleware'
import {Usermiddleware} from '../middlwares/users/user.middlewar'
import {UserBookmiddleware} from '../middlwares/bookuser/userbook.middlewar'
const users = new Users()
const books = new Books()

const router = Router()

router.post('/users', users.POST)
router.delete('/users/:id',Usermiddleware, users.DELETE)
router.get('/users', users.GET)
router.get('/users/:id',Usermiddleware, users.GET_BY_ID)
router.put('/users/:id',Usermiddleware, users.UPDATE)


router.post('/books', books.POST)
router.get('/books', books.GET)
router.get('/books/:id',BookMiddleware, books.GET_BY_ID)
router.delete('/books/:id',BookMiddleware, books.DELETE)
router.put('/books/:id',BookMiddleware, books.UPDATE)

router.post('/users_books',UserBookmiddleware, books.POST_USER_BOOK)

export default router