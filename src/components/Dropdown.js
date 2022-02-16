import SelectDropdown from 'react-native-select-dropdown';
import React from 'react';


export const Dropdown = (props) =>
{
    
    const countries = ["Français", "Anglais", "Espagnol", "Allemand"];

    return(
    <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {

            return selectedItem
        }}
        rowTextForSelection={(item, index) => {

            return item
        }}
    />)
}

export default Dropdown