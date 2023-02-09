import React, {ChangeEvent} from 'react';
type CheckBoxType={
    callBack:(checkedValue:boolean)=>void
    checked:boolean
}
export const CheckBox = (props:CheckBoxType) => {

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
       props.callBack(e.currentTarget.checked)
    }
    return (
        <input
            type="checkbox"
            onChange={onChangeHandler}
            checked={props.checked}/>
    );
};

