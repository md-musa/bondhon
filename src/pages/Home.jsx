import ProductCard from '../components/ProductCard';
import { data } from '../data';

function Home() {
  return (
    <section className="space-y-10">
      <div className="flex justify-center content-center my-10 ">
        <div className="space-y-8 text-center">
          <h3 className="text-3xl">কৃষক ও ক্রেতার মধ্যে সেতুবন্ধন</h3>
          <div className="space-x-4 text-center">
            <button className="btn btn-outline btn-success">এখনই ক্রয় শুরু করুন</button>
            <button className="btn btn-outline btn-success">কৃষক হিসাবে যোগ দিন</button>
          </div>
          <p className="text-xl text-gray-700">ন্যায্য ও প্রতিযোগিতামুলক মুল্যের সেরা সমাধান</p>
        </div>
      </div>

      <div className="grid grid-cols-2 my-40">
        <div className="left text-3xl p-5 flex justify-center items-center">
          <p className="border-2 border-green-600 rounded-lg py-8 px-5 h-min text-gray-700 leading-relaxed">
            গ্রামীন সাপ্রদায়কে ক্ষমতায়িত করতে এবং সরাসরি উতপাদন থেকে ক্রেতাদের সাথে সংযোগ স্থাপনের সহজ প্ল্যাটফর্ম।
          </p>
        </div>
        <div className="right p-5">
          <img
            src="https://img.freepik.com/premium-photo/happy-asian-man-farmer-with-smiling-face-hand-holding-smart-phone-standing-rice-farm-cash-subsidy-concept_55716-3406.jpg"
            className="rounded-md"
            alt=""
          />
        </div>
      </div>

      <div>
        <h3 className="text-3xl text-center mb-5 mt-10">পণ্য তালিকা</h3>

        <div className="grid grid-cols-3 gap-5">
          {data.map(item => (
            <ProductCard productData={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
