import { render } from '@czechitas/render';
import '../global.css';
import './index.css';


//V oddělené složce vytvořte komponentu Header, která vytvoří hlavičku stránky. Bude očekávat svoje props v následujícím formátu.

import { Header } from '../components/Header/Header'

const nadpis = { title: 'Jogíni', }
 

//V další složce vytvořte komponentu Intro vytvářející úvodní text podle následujích props.

import {Intro} from '../components/Intro/Intro'

const obsah = {
  heading: 'Vítejte mezi Jogíny',
  text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
         něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
         Postupně se seznámíte se základními principy jógy, jak přístupovat k
         sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
         svoje tělo, pocity a emoce.`,
}

//Stejným způsobem vytvořte komponentu Pose, která vytváří HTML pro úvodní obrázek. Komponenta očekává takovéto props.

import { Pose } from '../components/Pose/Pose' 

const yogaObrazek = {
  src: '../img/yoga-pose.jpg'
}

document.querySelector('#root').innerHTML = render(
  <>
    <Header title={nadpis.title}/>
    <Intro nazev={obsah.heading} popis={obsah.text}/>
    <Pose obrazek={yogaObrazek.src}/>
  </>
);
