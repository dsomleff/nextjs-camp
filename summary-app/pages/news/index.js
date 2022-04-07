import {Fragment} from "react";
import Link from "next/link";

export default function NewsPage() {
    return (
        <Fragment>
            <h1>Home Page</h1>
            <ul>
                <li>
                    <Link href="/news/hello-juju">Hello Ju</Link>
                </li>
                <li>Hello Mom</li>
            </ul>
        </Fragment>
    );
}