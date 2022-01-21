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
    variant: CardVariant
    //children?: React.ReactChild | React.ReactNode;//можно не указывать если компонент будет типа React.FC
}


//указываем объект props типа CardProps
//const Card = ({width, height, children}:CardProps) => {
// React.FC<CardProps> можно сократить до FC<CardProps>, только делать импорт из React {FC}

const Card: FC<CardProps> = ({width, height, variant, children}) => {
    return (
        <div style={{
            width, height,
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
        }}>
            {children}
        </div>
    )
};

export default Card;
