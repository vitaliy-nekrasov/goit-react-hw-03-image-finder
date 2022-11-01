import { LoadMoreBtn, Wrapper } from './Button.styled';

export function Button({ loadMore }) {
  return (
    <Wrapper>
      <LoadMoreBtn onClick={loadMore} type="button">
        Load more
      </LoadMoreBtn>
    </Wrapper>
  );
}
