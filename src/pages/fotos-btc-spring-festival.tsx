import { useEffect, useRef } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";
import cloudinary from "@/utils/cloudinary";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import type { ImageProps } from "@/utils/types";
import { useLastViewedPhoto } from "@/utils/useLastViewedPhoto";

import { InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";

import { useRouter } from "next/router";

const PhotosBtcSpringFestival: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ images }) => {
  const router = useRouter();
  const { photoId } = router.query;

  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef<HTMLAnchorElement | any>(null);

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);
  return (
    <>
      <Head>
        <title>Fotos - Bitcoin Spring Festival</title>
        <meta
          name="description"
          content="Confira as fotos do Bitcoin Spring Festival"
        />
        <meta property="og:title" content="Fotos - Bitcoin Spring Festival" />
        <meta
          property="og:description"
          content="Fotos - Bitcoin Spring Festival"
        />
        <meta
          property="og:image"
          content="https://www.bitcoineaqui.com.br/imgs/logobtceaqui.jpg"
        />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4 bg-black antialiased">
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId);
            }}
          />
        )}
        <div className="gap-4 mdMin:columns-1 lgMin:columns-2 xlMin:columns-3 2xlMin:columns-4">
          <div className="h-full pb-4">
            <Image
              src={"/imgs/festival.webp"}
              alt="Bitcoin Spring Festival"
              width={1123}
              height={1015}
            />
          </div>
          {images.map(({ id, public_id, format, blurDataUrl }) => (
            <div
              key={id}
              // href={`&photoId=${id}`}
              // as={`/p/${id}`}
              onClick={() => {
                router.replace(`?photoId=${id}`, `/p/${id}`, { shallow: true });
              }}
              ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              // shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt=""
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_50,c_scale,w_720/${public_id}.${format}`}
                width={720}
                height={480}
                unoptimized
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default PhotosBtcSpringFestival;

export const getStaticProps = async () => {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(500)
    .execute();
  let reducedResults: ImageProps[] = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
    },
    revalidate: 60,
  };
};
