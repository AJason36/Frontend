import Link from "next/link";
import Image from "next/image";
import TugasCard from "../../components/TugasCard";
import Head from "next/head";
import Navbar from "../../components/Navbar";

export default function LearningModules({ token }) {
  return (
    <div className="px-8 md:px-16 md:py-10 lg:px-20">
      <Head>
        <title>TEC Internship 2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets_intern/logo.png" />
      </Head>
      <main className="flex flex-col items-center min-h-screen">
        <div className="flex absolute w-[230px] h-[230px] md:w-[325px] md:h-[325px] xl:w-[375px] xl:h-[375px] 2xl:w-[445px] 2xl:h-[445px] top-5 left-5 opacity-50">
          <Image
            className=""
            src="/assets_intern/modul_kiri atas.png"
            alt="frame1"
            width={445}
            height={445}
          />
        </div>
        <div className="flex absolute w-[230px] h-[230px] md:w-[325px] md:h-[325px] xl:w-[375px] xl:h-[375px] 2xl:w-[445px] 2xl:h-[445px] -bottom-16 right-5 opacity-50">
          <Image
            className=""
            src="/assets_intern/modul_kanan bawah.png"
            alt="frame2"
            width={445}
            height={445}
          />
        </div>
        <Navbar token={token} />
        <div className="container">
          <div className="text-5xl mt-36 text-center mb-16">TUGAS</div>
          <TugasCard
            title={"Day 3 - Simpati, Empati, dan Solusi"}
            description={"Deadline: 5 Oktober 2022"}
            submissionLink={"https://forms.gle/38opnugHiVhbWbh39"}
            detailLink={"/"}
          />
        </div>
      </main>
    </div>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}