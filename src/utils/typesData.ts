export type TTrain = {
    name: string,
    description: string,
    characteristics: TrainCharacteristics[]
    id: string
}

export type TrainCharacteristics = {
    speed: number,
    force: number,
    engineAmperage: number
}