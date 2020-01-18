import { ValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";

export const matchPassword:ValidatorFn=(control:FormGroup):ValidationErrors|null=>{
    const password=control.get("password");
    const confirmPassword=control.get("confirmpassword");
    
    return password.value==confirmPassword.value?null:{passwordNotMatched:true};
}