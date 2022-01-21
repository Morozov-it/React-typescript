import React, { FC, useRef, useState } from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)

    //типизация хука для работы с неуправляемым инпутом
    const inputRef = useRef<HTMLInputElement>(null)

    //функция для обработки событий клавиатуры
    //HTMLInputElement только для поля ввода
    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    }
    //функция для обработки событий мыши
    function clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
        console.log(inputRef.current?.value)
    }

    //функции для drag/drop действий
    function dragHandler(e: React.DragEvent<HTMLDivElement>) {
        console.log('DRAG')
    }
    function dropHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setIsDrag(false)
        console.log('DROP')
    }
    function leaveHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setIsDrag(false)
    }
    function dragWithPreventHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setIsDrag(true)
    }

    return (
        <div>
            <input
                type='text'
                value={value}
                onChange={changeHandler}
                placeholder='controled'
            />
            <input
                type='text'
                ref={inputRef}
                placeholder='uncontroled'
            />
            <button onClick={clickHandler}>uncontrolled</button>
            {/* draggable это атрибут для перетаскивания дом-элемента */}
            <div onDrag={dragHandler} draggable style={{
                width: 50,
                height: 50,
                background:'red'
            }}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{
                    marginTop: 10,
                    width: 50,
                    height: 50,
                    background: isDrag?'blue':'red'
                }
            }></div>
        </div>)
};

export default EventsExample;
