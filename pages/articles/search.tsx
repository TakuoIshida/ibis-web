import { useRouter } from "next/router";
import { post } from "../../util/function";
import { BASE_URL } from "../../util/settings";
import { ArticleList } from "../../util/sample-data";

export async function getServerSideProps() {
  const url: string = BASE_URL + "/articles/search";
  const body = { keyword: "test" };
  const data = await post(url, body);
  return {
    props: {
      data,
    },
  };
}

type propsType = {
  data: ArticleList;
};

const article = (props: propsType) => {
  return (
    <>
      <div>
        {props.data.map((item, i) => {
          return (
            <div key={i}>
              <ul>
                <li>{item.Title}</li>
                <li>{item.Journal}</li>
                <li>{item.OriginalURL}</li>
                <li>{item.PublishDate}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default article;
