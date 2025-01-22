import React, { useEffect, useState } from 'react'

// include this in the admin dashboard and you'll see the stats of the various activities
const ActivityStatView = () => {

    const [ActivityStats, SetActivityStats] = useState({})

    useEffect(() => {
        async function FetchActivityStats(){
            const URL = "https://mghs-backend.onrender.com/activity/stats"

            const response = await fetch(URL, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const res_data = await response.json()
            console.log(res_data)
            SetActivityStats(res_data)
        }
        FetchActivityStats()
    }, [])    

    return (
        <section className="progress_metrics_view">
            <section className="block-section">
                <section className="block">
                    <h2>Number of Activities</h2>
                    <p>Total number of activities available.</p>
                    <strong>{ActivityStats.activity_row_count} activities</strong>
                </section>

                <section className="block">
                    <h2>Incomplete Activities</h2>
                    <p>Number of activities that are not yet completed.</p>
                    <strong>{ActivityStats.incomplete_activities} activities incomplete</strong>
                </section>

                <section className="block">
                    <h2>Complete Activities</h2>
                    <p>Number of activities that have been completed.</p>
                    <strong>{ActivityStats.complete_activities} activities complete</strong>
                </section>

                <section className="block">
                    <h2>Incomplete Subscriptions</h2>
                    <p>Number of subscriptions that are not yet completed.</p>
                    <strong>{ActivityStats.incomplete_subs} subscriptions incomplete</strong>
                </section>

                <section className="block">
                    <h2>Complete Subscriptions</h2>
                    <p>Number of subscriptions that have been completed.</p>
                    <strong>{ActivityStats.complete_subs_count} subscriptions complete</strong>
                </section>

                <section className="block">
                    <h2>Least Complete Activity</h2>
                    <p>Activity with the least completions.</p>
                    <strong>{ActivityStats.least_complete_activity} completions</strong>
                </section>

                <section className="block">
                    <h2>Most Complete Activity</h2>
                    <p>Activity with the most completions.</p>
                    <strong>{ActivityStats.most_complete_activity} completions</strong>
                </section>

                <section className="block">
                    <h2>No. Of Subscriptions</h2>
                    <p>Total number of subscriptions.</p>
                    <strong>{ActivityStats.subscriptions_count} subscriptions</strong>
                </section>
            </section>
        </section>
    );
};

export default ActivityStatView;
