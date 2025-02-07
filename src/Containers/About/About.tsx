import React, { useCallback, useEffect, useState } from "react";
import axiosApi from "../../axiosApi.ts";
import { IBlogDataAPI, IInformation } from "../../types.d.tsx";
import Loader from "../../components/Loader/Loader.tsx";

const About = () => {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<IInformation>();

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosApi<IBlogDataAPI>("blogData.json");
      setInfo(response.data.information);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchPosts();
  }, [fetchPosts]);

  let content: React.ReactNode;

  if (loading) content = <Loader />;

  if (!loading) {
    if (info)
      content = (
        <>
          <main>
            <h1>Кто мы</h1>
            <p>
              Мы – первые пришельцы, которым удалось устроиться на работу на
              Земле! Это для нас новый, захватывающий опыт, и мы полны
              энтузиазма. Просим не судить строго – мы многого пока не понимаем,
              но стараемся быстро разобраться.
            </p>
            <p>
              На Марсе всё совсем не так, как у вас. Мы привыкли к слабой
              гравитации, красному небу и тишине, в которой слышен лишь ветер
              пылевых бурь. Здесь же всё шумное, яркое и такое разнообразное,
              что у нас иногда перегружается сознание. Вы выражаете эмоции
              лицом, а мы привыкли к телепатии. У вас время делится на часы и
              минуты, а у нас сутки длиннее почти в два раза. Даже еда у вас
              странная – она не в тюбиках! Но мы стараемся освоиться и научиться
              всему, что нужно для жизни и работы на Земле.
            </p>
            <p>
              Если мы вдруг делаем что-то не так – просто подскажите! Мы ценим
              обратную связь (да, на Марсе её тоже боятся, но без неё никак).
            </p>
            <p>
              Рады быть здесь, учиться и работать с вами! Вместе мы сделаем этот
              мир (и, возможно, всю Солнечную систему) чуточку лучше.
            </p>
          </main>

          <div className="text-end mt-5">
            <b className="fs-5">Мы находимся по адресу:</b> {info.address},
            регион {info.region} планеты {info.planet}
          </div>
        </>
      );
  }

  return <div className="container">{content}</div>;
};

export default About;
