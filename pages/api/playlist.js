export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "تلاوة 1",
      file_url: "https://quran-stream-zeta.vercel.app/quran1.mp3",
      sort_order: 1
    },
    {
      id: 2,
      title: "تلاوة 2",
      file_url: "https://quran-stream-zeta.vercel.app/quran2.mp3",
      sort_order: 2
    },
    {
      id: 3,
      title: "تلاوة 3",
      file_url: "https://quran-stream-zeta.vercel.app/quran3.mp3",
      sort_order: 3

       },
       {
      id: 4,
      title: "تلاوة 4",
      file_url: "https://quran-stream-zeta.vercel.app/quran4.mp3",
      sort_order: 4

       },
       {
      id: 5,
      title: "تلاوة 5",
      file_url: "https://quran-stream-zeta.vercel.app/quran5.mp3",
      sort_order: 5

       },
       {
      id: 6,
      title: "تلاوة 6",
      file_url: "https://quran-stream-zeta.vercel.app/quran6.mp3",
      sort_order: 6
    }
  ]);
}
