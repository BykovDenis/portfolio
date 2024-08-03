import TPortfolio from "../types/tportfolio.ts";
import SlideType from "../../enums/slide-type.ts";

/**
 * Created by Denis on 18.04.2017.
 */
const initialState: TPortfolio = {
  siteStep: 0,
  spaStep: 0,
  type: SlideType.Html,
  spaSlides: [
    {
      id: 'spa-slide-1',
      name: 'Weather widget',
      src: './src/img/img-openweathermap.jpg',
      href: 'https://openweathermap.org/city',
      width: '500',
      height: '487',
    },
    {
      id: 'spa-slide-2',
      name: 'Query Builder',
      src: './src/img/img-query-builder.jpg',
      href: 'https://owm.io/sql-viewer',
      width: '500',
      height: '289',
    },
    {
      id: 'spa-slide-3',
      name: 'Portfolio',
      src: './src/img/img-portfolio.jpg',
      href: 'https://denisbykov.tech',
      width: '500',
      height: '451',
    }
  ],
  siteSlides: [
    {
      id: 'site-slide-1',
      name: 'Pink',
      src: './src/img/img-pink.jpg',
      href: '//denisbykov.tech/pink',
      width: '300',
      height: '816',
    },
    {
      id: 'site-slide-2',
      name: 'Flat shoes',
      src: './src/img/img-flat-shoes.jpg',
      href: '//denisbykov.tech/flat_shoes',
      width: '300',
      height: '466',
    },
    {
      id: 'site-slide-3',
      name: 'Modern look',
      src: './src/img/img-modern-look.jpg',
      href: '//denisbykov.tech/modern_look',
      width: '300',
      height: '814',
    },
    {
      id: 'site-slide-4',
      name: 'Be Latte',
      src: './src/img/img-be-latte.jpg',
      href: '//denisbykov.tech/be-latte',
      width: '300',
      height: '674',
    },
    {
      id: 'site-slide-5',
      name: 'Brandly',
      src: './src/img/img-brandly.jpg',
      href: '//denisbykov.tech/brandly2',
      width: '300',
      height: '455',
    },
    {
      id: 'site-slide-6',
      name: 'Technomart index',
      src: './src/img/img-technomart-index.jpeg',
      href: '//denisbykov.tech/technomart',
      width: '300',
      height: '793',
    },
    {
      id: 'site-slide-7',
      name: 'Technomart Catalog',
      src: './src/img/img-technomart-catalog.jpeg',
      href: '//denisbykov.tech/technomart',
      width: '300',
      height: '731',
    },
    {
      id: 'site-slide-8',
      name: 'Jewelery',
      src: './src/img/img-jewelery.jpeg',
      href: '//denisbykov.tech/jewelery/',
      width: '300',
      height: '1036',
    },
    {
      id: 'site-slide-9',
      name: 'Sedona index',
      src: './src/img/img-sedona-index.jpeg',
      href: '//denisbykov.tech/sedona/',
      width: '300',
      height: '695',
    },
    {
      id: 'site-slide-10',
      name: 'Sedona inner',
      src: './src/img/img-sedona-inner.jpeg',
      href: '//denisbykov.tech/sedona/inner.html',
      width: '300',
      height: '293',
    },
  ]
};

export default initialState;
