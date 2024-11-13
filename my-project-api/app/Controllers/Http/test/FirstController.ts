import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FirstController {
  public async csrfToken(ctx: HttpContextContract) {
    return { csrfToken: ctx.request.csrfToken }
  }
  public async formPost(ctx: HttpContextContract) {
    const data = ctx.request.all()
    console.log("data", data)
    return {
      "message": "Form Posted Successfully",
      "data": 'Form Data'
     }
    
  }
}
