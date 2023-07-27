import { QueryTestComponent } from "@/app/about/QueryTestComponent";
import ZustandCounter from "@/app/about/ZustandTestComponent";

interface example {
}

export default function About (props: example) {
    return (
        <div>
            <QueryTestComponent/>
            <ZustandCounter/>
        </div>
    )
}
