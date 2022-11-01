import { LoadMoreBtn } from './Button.styled';

export function Button({ loadMore }) {
  return (
    <LoadMoreBtn onClick={loadMore} type="button">
      Load more
    </LoadMoreBtn>
  );
}
