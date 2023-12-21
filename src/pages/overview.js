import React from "react";
import OverviewBanner from "../components/OverviewBanner";
import '../App.css';
import Meta from "../components/meta";
import CmsBlock from "../components/cmsblock";
import SwastiBlock from "../components/swastiblock";
import VruttiBlock from "../components/vruttiblc";
import FuzhioBlock from "../components/fuzhioblc";
import GreenFnBlock from "../components/greenFnBlock";
import UpfrontBlock from "../components/upfrontblc";
import CatalystBlock from "../components/catalystblc";
import Ecosystem from "../components/ecosystem";
import CACollab from "../components/cacollab";
import Overviewmenu from "../components/overviewmenu";

const Overview = () => {
    const title = 'Catalyst Global Overview';
	const desc = 'Description';
	const url = 'URL';
	const banner = 'http://localhost:3000/static/media/Green_foundation_logo.2f0c40f0.png';

    return (
        <>
        <Meta title={title} desc={desc} url={url} banner={banner} />
        <Overviewmenu />
        <OverviewBanner />
        <CmsBlock />
        <SwastiBlock />
        <VruttiBlock />
        <FuzhioBlock />
        <GreenFnBlock />
        <UpfrontBlock />
        <CatalystBlock />
        <Ecosystem />
        <CACollab />
        </>
    );
};

export default Overview;