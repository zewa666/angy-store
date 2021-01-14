import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "a-ngy-store";
import { Subscription } from "rxjs";

import { initialState, State } from "./state";

@Component({
  selector: "an-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  title = "aNGy";
  public state: State = initialState;

  private subscription!: Subscription;

  constructor(public storeService: Store<State>) {
    this.storeService.registerComputed("fullName", (state) => {
      return `${state.firstName} ${state.lastName}`;
    });
  }

  ngOnInit(): void {
    this.storeService.registerAction("foo", foo);
    this.subscription = this.storeService.state.subscribe((state) => this.state = state);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  clickMe(): void {
    this.storeService.dispatch(foo, "Blub", "Blab");
  }
}

export const foo = (state: State, firstName: string, lastName: string): State => {
  // state.firstName = firstName;
  // state.lastName = lastName;

  // return state;
  return { ...state, firstName, lastName };
};
