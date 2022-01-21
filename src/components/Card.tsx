import React, {FC} from 'react';

//создаем перечисление констант
export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

//создаем типы полей для props
interface CardProps {
    width: string;
    height?: string; //указание необязательного
    variant: CardVariant,
    onClick: (num:number) => void;//параметры не принимает и ничего не возвращает, если нужет возврат то указываем number, string, Object, Array, и каждому параметру указываем тип

    //children?: React.ReactChild | React.ReactNode;//можно не указывать если компонент будет типа React.FC
}


//указываем объект props типа CardProps
//const Card = ({width, height, children}:CardProps) => {
// React.FC<CardProps> можно сократить до FC<CardProps>, только делать импорт из React {FC}

//компонент Card является типом и принимает пропсы типом CardProps
const Card: FC<CardProps> = ({ width, height, variant, children, onClick }) => {
    const state = 0;
    return (
        <div style={{
            width, height,
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
        }}
            onClick={() => onClick(state)}>
            {children}
        </div>
    )
};

export default Card;
