import { MagnifyingGlass } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export function Loader() {
  return (
    <Wrapper>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </Wrapper>
  );
}
