import { useSelector } from "react-redux";

const Videos = () => {
  const { searchInput, videos } = useSelector((store) => store.videoSlice);

  return (
    <div className="flex flex-row justify-center flex-wrap gap-4 mt-8">
      {videos?.items?.map((item) => {
        const {
          id,
          snippet: { title, description },
        } = item;
        return (
          <>
            <div className="flex justify-center mt-5">
              <div className="flex flex-col rounded-lg shadow-lg bg-white max-w-sm">
                <iframe
                  height="260"
                  src={`https://www.youtube.com/embed/${
                    searchInput ? id?.videoId : id
                  }`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {title}
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    {description.slice(0, 150)}...
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Videos;
