import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import './AddWidget.css'

const AddWidget = ({typeList, onEditOpenModal}) => {
    return (
        <Dropdown text='Добавить виджет'>
            <Dropdown.Menu>
                {
                    typeList.map(item => {
                        return(
                            <Dropdown.Item onClick={() => {onEditOpenModal(true, item)}} text={item} key={item}/>
                        );
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default AddWidget;

//onClick={() =>{onAddItem(item)}}