import React from "react";
import Sidebar from "../../../components/organism/Sidebar";
import TransactionContent from "../../../components/organism/TransactionContent";

export default function index() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar />
      <TransactionContent/>
    </section>
  );
}
