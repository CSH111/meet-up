import Head from "next/head";
import Image from "next/image";
// import { Inter } from 'next/font/google'
import { Meetup } from "@/types";
import MeetupList from "@/components/meetups/MeetupList";

// const inter = Inter({ subsets: ['latin'] })

const DUMMY_DATA: Meetup[] = [
  {
    id: "123",
    title: "ddddd1",
    address: "천안시 서북구",
    image:
      "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

export default function Home() {
  return (
    <>
      <MeetupList meetups={DUMMY_DATA} />
    </>
  );
}
