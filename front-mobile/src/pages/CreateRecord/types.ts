export type GamePlatform = 'XBOX' | 'PC' | 'PLAYSTATION'

export type Game ={
    id: number;
    plaftorm: GamePlatform;
    title: string;
    label: string;
    value: number;    
}