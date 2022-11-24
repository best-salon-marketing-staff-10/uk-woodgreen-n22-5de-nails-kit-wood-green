import Link from "next/link";
import { changedInfo } from "../core/info";
import { processedInfo } from '/pages/core/info';
import { pageContent } from '/pages/core/info';

export default function ContentOurPolicy(){
    return(
        <>
            <div className="content-our-policy">
                <div className="content-heading-h1">
                    {pageContent.contentOurPolicyHeadingMain}
                </div>
                <div className="content-block">
                    <div className="content-heading-h2">
                        {pageContent.contentOurPolicyHeadingSmall1}
                    </div>
                    <div className="content-description">
                        {pageContent.contentOurPolicyDescription1}
                    </div>
                </div>
                <div className="content-block">
                    <div className="content-heading-h2">
                        {pageContent.contentOurPolicyHeadingSmall2}
                    </div>
                    <div className="content-description">
                        {pageContent.contentOurPolicyDescription2}
                    </div>
                </div>
                <div className="content-block">
                    <div className="content-heading-h2">
                        {pageContent.contentOurPolicyHeadingSmall3}
                    </div>
                    <div className="content-description">
                        {pageContent.contentOurPolicyDescription3}
                    </div>
                </div>
                <div className="content-block">
                    <div className="content-heading-h2">
                        {pageContent.contentOurPolicyHeadingSmall4}
                    </div>
                    <div className="content-description">
                        {pageContent.contentOurPolicyDescription41}
                        <a className="content-description-link-a" href={processedInfo.callBusiness}>
                            {changedInfo.businessPhoneNumber}
                        </a>
                        {pageContent.contentOurPolicyDescription42}
                    </div>
                </div>
                <div className="content-block">
                    <div className="content-heading-h2">
                        {pageContent.contentOurPolicyHeadingSmall5}
                    </div>
                    <div className="content-description">
                        {pageContent.contentOurPolicyDescription5}
                    </div>
                </div>
            </div>
        </>
    );
}