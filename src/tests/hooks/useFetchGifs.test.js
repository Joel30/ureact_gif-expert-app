import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {

  test('debe de retornar el estado inicial', async() => {
    const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('One Punch'));
    const {data, loading} = result.current;

    await waitForNextUpdate();//extra 

    // const {data, loading} = useFetchGifs('One Punch');

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('debe de retornar un arrgle de imgs y el loading en false', async () => {
    //[waitForNextUpdate] indica cuando ya sucedio un cambio en el estado de nuestro custom hooks
    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
    await waitForNextUpdate();
    const {data, loading} = result.current;

    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  });
});