import Head from "next/head"
import AppLayout from "components/AppLayout"

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Sasari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <div className="container">
          <h1>Contacto</h1>
        </div>
      </AppLayout>
    </>
  )
}
