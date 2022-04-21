import  { RestController, GET, POST, Autowired, PathValue, QueryValue, Body } from '../../core/decorators'
import UserService from './user_service';

interface IUser {
  name: string
  age: number
}

@RestController('/user')
export default class UserController {
  @Autowired
  userService: UserService;

  @GET('/hello')
  hello1() {
    return this.userService.test()
  }

  @POST('/hello/:s')
  hello2(@PathValue("s") s: string, @QueryValue("d") d: number, @Body user: IUser) {
    return this.userService.response(s, d, user)
  }
}