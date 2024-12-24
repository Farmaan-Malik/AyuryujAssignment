import {create} from 'zustand'
import {DoctorObject} from "@/app/(mainTabs)/(doctorListing)";
import {state} from "sucrase/dist/types/parser/traverser/base";
import {createAvatar} from "@dicebear/core";
import {lorelei} from "@dicebear/collection";

type Store = {
    username: string,
    selectedDoctor: DoctorObject | null,
    svg: string,
    setUsername: (name: string) => void,
    setSelectedDoctor: (doctor:DoctorObject | null) => void,
    setSvg: (svg:string) => void,
    setAge: (age:string) => void,
    setGender: (gender:string) => void,
    gender:string,
    age:string,
}
const avatar  = createAvatar(lorelei, {
    seed: ''
});

export const useStore = create<Store>((setState,getState) => ({
    username: 'Farmaan Malik',
    svg:avatar.toString(),
    gender:'Male',
    age:'23',
    selectedDoctor: null,
    setUsername: (name:string) => {
        setState(state => ({...state, username:name}))
    },
    setGender: (gender:string) => {
        setState(state => ({...state, gender:gender}))
    },
    setAge: (age:string) => {
        setState(state => ({...state, age:age}))
    },
    setSelectedDoctor : (doctor:DoctorObject | null) => {
        setState(state=>({...state, selectedDoctor:doctor}))
    },
    setSvg : (svg:string) => {
        setState(state=>({...state, svg:svg}))
    },
}))