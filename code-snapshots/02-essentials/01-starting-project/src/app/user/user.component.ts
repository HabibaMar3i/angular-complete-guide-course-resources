import { Component, computed, EventEmitter, input, Input, Output, signal } from '@angular/core';
import {DUMMY_USERS} from '../dummy-users'

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex]
  // selectedUser = signal(DUMMY_USERS[randomIndex])

  // get imagePath() {
  //   return "assets/users/" + this.selectedUser.avatar
  // }

  // imagePath = computed(()=>{
  //   return "assets/users/" + this.selectedUser().avatar
  // })

  // onUserSelect(){
  //   const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
  //   this.selectedUser.set(DUMMY_USERS[randomIndex])
  // }

  @Input({required: true}) avatar!: string
  @Input({required: true}) name!: string

  @Input({required: true}) id!: string

  @Output() select = new EventEmitter()

  get imagePath(){
    return "assets/users/" + this.avatar
  }

  // avatar = input.required<string>()
  // name = input.required<string>()

  // imagePath = computed(()=>{
  //     return "assets/users/" + this.avatar()
  // })


  onUserSelect(){
    this.select.emit(this.id)
  }

}
