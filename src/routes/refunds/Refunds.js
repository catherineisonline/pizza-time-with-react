import { useEffect } from "react";
import refundsContent from "../../data/refundsContent";

const Refunds = () => {
    useEffect(() => {
        document.title = "Refunds | Pizza Time";
    }, []);
    return (
        <main className="terms">
            <h2>Refunds</h2>
            <p>This Refund Policy ("Policy") outlines the terms and conditions for requesting a refund for the Instagram growth services provided by Pizza Time ("Pizaa Time," "we," "our," or "us"). By using our services, you ("you," "your," or "user") agree to comply with this Policy regarding refund requests.</p>
            {refundsContent.map((content) =>
                <section key={content.title}>
                    <h3>{content.id}. {content.title}:</h3>
                    <p>{content.content}</p>
                </section>)}
        </main>
    )
}

export default Refunds;