import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas del componente GifGridItem', () => {

  const title = "Un título";
  const url = "https://locahost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url}/>); 

  test('debe de mostrar el componente correctamente', () => {
    

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un párrafo con el title', () => {
    const p = wrapper.find('p').text().trim();

    expect(p).toBe(title);
  });

  test('debe de tener la imagen igula al url y al de los props', ()=>{
    const img = wrapper.find('img').props(); //.props().src     -or-    .prop('src')

    expect(img.src).toBe(url);
    expect(img.alt).toBe(title);
  });

  test('debe de tener animate__fadeIn', () => {
    const div = wrapper.find('div').prop('className');

    expect(div.includes('animate__fadeIn')).toBe(true);
  });
});