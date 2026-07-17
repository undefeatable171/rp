const cats = ["All", "Project", "Bronze", , "Silver", "Gold", "Orchestration", "Mindset & growth"];
const qs = [
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// new 
    {
        cat: "Story & fit",
        q: "Relted links",
        answer: `<p>  <a href="https://undefeatable171.github.io/int-prep/healthcare-notes.html" target="_blank" class="link">
    Health care
</a></p> <br>
<p><a href="https://undefeatable.github.io/int-prep/azure/d.html" target="_blank" class="link">
    Azure services  related </a></p>
	<br>
	<p><a href="https://undefeatable171.github.io/int-prep/dbx/content.html" target="_blank" class="link">
    DBX & SPARK related </a></p>
	<br>
	<p><a href="https://undefeatable171.github.io/int-prep/git_notes.md" target="_blank" class="link">
    git notes </a></p>`,
        children: [],
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        cat: "Story & fit",
        q: "Starting",
        answer: ``,
        tip: `end-end data pipe line = end-end data framework `,
        children: [
            {
                q: `tell me about yourself`,
                a: ` Hi, I'm Prathap. I'm currently working as an Azure Data Engineer at TCS with around 3 years of experience. I primarily work on a US healthcare project, building scalable batch ETL pipelines using Azure Databricks, PySpark, Python, and SQL. 
                <br>I hold both the Databricks Certified Data Engineer Associate and Professional certifications, and coming to academics,  I have completed my graduaction in Electronics and Communication Engineering from VR Siddhartha Engineering College, Vijayawada.`,
                children: [
                    {
                        q: "Why ECE to Data Engineering?",
                        a: "Although I studied ECE, I developed a strong interest in software during my college and started learning Python and SQL. That interest turned into hands-on experience in my current role with Databricks and PySpark, so I chose to build my career in data engineering",
                        children: []
                    },
                ],
            },
            {
                q: `why are you looking for new role/ change company`,
                a: ` TCS has given me a strong foundation in building production-grade data pipelines on Azure Databricks and working with large-scale healthcare data.
                <br> I'm now looking for an opportunity where I can take on broader responsibilities, work on more complex data engineering problems, and contribute to the design and development of scalable data platforms. `,
                children: [
                    {
                        q: "what optimizations",
                        a: "👉 In our pipelines, I mainly worked on reducing job runtime . For example, one of our joins between large claim tables was causing heavy shuffle. I optimized it using broadcast join for smaller dimension tables and repartitioned data based on join keys. This reduced runtime by around 30–40%.",
                        children: [
                            {
                                q: `how you identifiedbottle necks`,
                                a: `“I identified the bottleneck using Spark UI — stages with high shuffle read and skewed tasks."`,
                                children: []
                            },
                        ],
                    },
                    {
                        q: `what design decisions are you ref to`,
                        a: `👉“Primarily around structuring pipelines — deciding how to split transformations across bronze, silver, and gold, choosing incremental vs full loads, and partitioning strategies for large tables.”
            👉 If pushed:“For example, for frequently updated healthcare claims data, we used incremental loads with merge instead of full refresh to reduce processing time.”`,
                        children: [],
                    },
                    {
                        q: `what makes systems scabale`,
                        a: `Scalability depends on handling increasing data without performance degradation. In our case, we ensured scalability using partitioning on high-cardinality columns, incremental processing instead of full loads, and avoiding data skew during joins.`,
                        children: [],
                    },
                    {
                        q: `How do you ensure data quality?`,
                        a: `In silver layer, we apply checks like removing duplicates, handling null values, and validating schema. We also compare record counts between source and target. For critical tables, we added validation queries to ensure consistency before loading into gold.`,
                        children: [],
                    },
                    {
                        q: `Handling large data volumes?`,
                        a: `For large datasets, we use partitioning and avoid small file issues by optimizing file sizes. We also use Delta format for efficient reads and writes. During joins, we handle skew using repartitioning or broadcast where applicable`,
                        children: [],
                    },
                    {
                        q: `how do you handle failures`,
                        a: `“We use retry mechanisms in our job orchestration. Also, since we use incremental loads with merge, pipelines are idempotent — rerunning doesn’t create duplicates. We also log failures and track them for debugging.”`,
                        children: [],
                    },
                    {
                        q: `How do you optimize cost in Databricks?`,
                        a: `We optimized cost by using job clusters instead of all-purpose clusters, enabling auto-scaling, and avoiding unnecessary full data processing. Also, by optimizing queries and reducing shuffle, we reduced compute usage.`,
                        children: [],
                    },
                ]
            },
            {
                q: `have you ever worked on any end-end data Frame work ?`,
                a: `"Yes, I've worked on an end-to-end data pipeline built on Azure Databricks. We follow Medallion architecture — starting from raw ingestion in Bronze, transformation and deduplication in Silver, and business-ready aggregations in Gold. The entire pipeline is orchestrated through Databricks Workflows, processing around 45–50 GB of healthcare data daily. From source to BI consumption — that's our end-to-end framework." `,
                children: [{
                    q: `"Can you tell me more about the domains of the projects that you have worked with?"`,
                    a: `I have primarily worked in the Healthcare domain for a US-based client. The project deals with clinical and financial data.
. We receive data from multiple Source systems systems containing member information, provider details, claim transactions, diagnosis codes, and payment information.

My role is to build and maintain Databricks-based ETL pipelines that ingest data from PostgreSQL and file-based sources, transform it, and make it available for downstream reporting, analytics, and data science teams.<br>
https://prathap-chowdary.github.io/int-prep/healthcare-notes.html  ------ use this for healthcare notes`,
                    children: [
                        {
                            q: `"You said healthcare claims. What are the top 5 datasets you process?"`,
                            a: `The major datasets include member information, provider information, claim transaction data, visits , diagnosos and procedures etc,.`,
                            children: [],
                        },
                        {
                            q: `How HIpaa is followed`,
                            a: `HIPAA compliance in our project is handled at multiple levels.
  <ul>
  <li>In our project, sensitive fields like SSN and home address are handled at the source level itself — data comes from the client's PostgreSQL system already tokenized  before landing in our pipeline.</li>
  <li>Business identifiers like MemberID, ClaimID, ProviderID, NDC codes are accessible as they're needed for ETL and joins — these are not considered hard PII under HIPAA.  Raw PII visibility is restricted to the client's compliance team — we don't interact with it at any layer of our Medallion pipeline.</li>
  <li>At the pipeline level, no PII fields are logged or printed in notebook outputs or job logs.</li>
  <li>Access is controlled through Azure AD groups synced into Databricks via SCIM — we follow the least privilege principle, each group gets exactly what their job needs.</li>
  <ul>`,
                            children: [],

                        },
                    ],
                },],
            },
            {
                q: `What data sources have you worked with?`,
                a: `💠In my current healthcare project at TCS, I've primarily worked with relational databases and file-based sources. Our main source is a PostgreSQL database that stores operational healthcare data, and we also receive CSV and Excel files from external partners. These files are landed into ADLS Gen2 before processing.

<br> 💠 My responsibility was to build ingestion pipelines that could handle both database and file-based inputs efficiently. For database tables, we use incremental extraction based on a watermark maintained in a metadata table, while for files we perform schema validation before loading them into the Bronze layer.

<br> 💠 This approach helps us process around 45–50 GB of data daily while minimizing redundant data movement, and it integrates seamlessly with our Medallion architecture.`,
                children: [],
            }

        ]
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// new 

    {
        cat: "Project",
        q: "Walk me through your current project.",
        answer: `
<div style="font-family:Segoe UI,Arial,sans-serif; line-height:1.5; font-size:13px;">

    <span style="color: #0078D4;">Domain & Objective:</span> 
    <p>I'm currently working on a US healthcare project for a hospital network operating multiple hospitals and  clinics. The objective of our platform is to consolidate data from multiple operational systems into a centralized data platform for downstream reporting, analytics. We built this platform on Azure Databricks using Medallion architecture, for clean separation between raw ingestion, transformation, and business-ready data.
  </p>
<span style="color: #0078D4;">Data Sources:</span> 
  <p>
Our primary sources are an on-premises PostgreSQL database containing operational healthcare data, along with CSV and Excel files such as eligibility extracts, claims adjudication, prior authorization, and reference datasets like ICD, CPT, fee schedules, and provider roster.<br> Overall, we  processes around 45–50 GB of data per day and the core operational pipelines run every four hours using Databricks Workflows.  </p>
<span style="color: #0078D4;">Layers:</span>
  <p>
At a high level, Bronze is our raw ingestion layer, Silver is where we clean, standardize, and maintain the latest operational data, and Gold is our business consumption layer where we build dimension and fact tables for downstream analytics.  </p>
    <span style="color: #0078D4;">Outro:</span><br>
  <p>
We use Unity Catalog for centralized governance, and since the data contains PHI, access is controlled through fine-grained security. Downstream finance, BI, and data science teams consume the curated datasets we deliver. Ourresponsibility is building and maintaining the data platform, while the BI team owns the reporting  </p>

</div>
`,
        tip: `Just say this , if asked then continue each layer details.`,
        children: [
            {
                q: `detailed project flow`,
                a: `
        <span style="color: #0078D4;">Sources:</span><br>
        <p> We have two primary source types. <ol><li>The first is an on-premises PostgreSQL database containing six core operational tables: Patients, Providers, Encounters, Claims, Diagnoses, and Procedures.</li><li>

The second consists of file-based sources such as daily CSV files for Eligibility, Claims Adjudication, and Prior Authorization responses, along with periodic reference files like ICD-10, CPT, Fee Schedule, and Provider Roster.</li></ol></p>
        <span style="color: #0078D4;">Bronze:</span><br>
        <p> The Bronze layer is responsible for raw data ingestion. PostgreSQL data is ingested incrementally, while file-based sources are processed on their respective schedules.
The Bronze layer preserves raw source data in Parquet format, applying only minimal transformations like schema alignment and audit metadata.<ps>Stored as partition by ingetion_date, append only</p>
        <span style="color: #0078D4;">Silver:</span><br>
        <p>The Silver layer standardizes and cleans the data by applying data quality validations like null handling, datatype standardization, and deduplication. The cleaned data is then MERGED into cumulative Delta tables, while reference datasets are refreshed using full reload whenever new versions are received.</p>
        <span style="color: #0078D4;">Gold:</span><br>

        <p>The Gold layer is our business consumption layer, where dimensions preserve history using SCD Type 2 while fact tables are enriched with dimensions and reference data for downstream analytics."
</p>
        <span style="color: #0078D4;">Downstream Consumption:</span><br>
        <p>The curated Gold tables are consumed by finance, operations, BI, and data science teams. Our responsibility is building and maintaining the data platform, while the BI team owns the reporting and KPI definitions</p>
        <span style="color: #0078D4;">Orchestration & Monitoring:</span><br>
        <p>he platform is orchestrated using Databricks Workflows, and we use Unity Catalog for centralized governance with fine-grained access control to protect PHI.</p>
          <span style="color: #0078D4;">Responsibility:</span><br>
          <p>My responsibilities include developing PySpark transformations, implementing incremental ETL pipelines, optimizing Spark jobs, resolving production issues.</p>
        `,
                children: [],
            },
            {

                q: `High Level`,
                a: ``,
                children: [
                    {
                        q: `Why medallion `,
                        a: ` <ul> <li>Our data came from multiple sources—an on-prem PostgreSQL database, daily CSV extracts, and monthly/annual reference files , each has different formats, refresh frequencies.</li>
                        <li> so Medallion gave us clear separation of responsibilities. Bronze preserved raw data, Silver produced a clean and standardized data, and Gold delivered business-ready datasets </li>
                        <li> It also simplified recovery and debugging, because if a downstream layer failed, we could reprocess from the previous layer instead of repeatedly extracting data from the source systems.</li></ul>`,
                        children: [],
                    },
                    {
                        q: `what is medallion`,
                        a: ` <li>Medallion architecture is a layered data design pattern with three zones — Bronze, Silver, and Gold.</li>
					<li>Bronze is the raw landing layer where data is ingested as-is from source systems with minimal transformation. Silver produced a clean and standardized data, and Gold delivered business-ready datasets </li>
<li>The core idea is progressive data quality — each layer adds more structure and trust to the data </li>`,
                        children: [],
                    },
                    {
                        q: `<span style="color:#1F618D;font-weight:bold;">Are you connecting to oon-prem postgres using self hosted Ienegration Runtime(SHIR)</span><br>
`,
                        a: `<p>No. SHIR is typically used with Azure Data Factory for on-prem connectivity, whereas our ingestion was implemented directly in Databricks using JDBC over the client's secure network.</p>`,
                        children: [],
                    },

                    {
                        q: `Why Databricks for just 45–50 GB/day, not rdbms or Snowflake ingestion`,
                        a: ` 👉Current volume is moderate, but we chose Databricks for scalability, complex transformations like SCD2, and Delta features like MERGE and time travel.
			It’s more about future growth and flexibility than just current size.<br>
			👉If migrated now : At current scale, a traditional system could work but slow due to scd2+ complex joins, but Databricks gives us better flexibility and future 				scalability. `,
                        children: [],
                    },
                    {
                        q:`At which stage did you apply DQ checks—Bronze, Silver, or Gold? Why?`,
                        a:`We applied DQ checks across all three layers. In Bronze, we validated file/schema and row counts to ensure successful ingestion. In Silver, we handled null checks, duplicates, data types, and business key validations to clean the data. In Gold, we validated business rules  before exposing data to reporting.`,
                        children:[],
                    },
                    {
                        q:`Can you give an example where a DQ check prevented bad data from going downstream?`,
                        a:`In the Silver layer, we found claims with NULL patient_id due to an upstream issue. Our null check quarantined those records instead of processing them further, while valid records continued through the pipeline.
                        <br> This prevented incorrect healthcare metrics and reports in the Gold layer."`,
                        children:[],
                    },
                    {
                        q:`what business rules in Gold`,
                        a:`In the Gold layer, we perform business validations rather than technical validations. For example, we ensure every claim has valid patient and provider records, verify ICD/CPT codes against reference data, check patient eligibility on the service date, and validate that claim amounts paid  does not exceed the allowed amount as per the fee schedule brfore reporting reporting.`,
                        children:[],
                    },
                ],
            },
            ///new

        ],
    },

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// new 
    {
        cat: "Orchestration",
        q: "Arcitecture - Orchestration",
        answer: ``,
        children: [
            {
                q: `why not ADF only dbx`, a: `Our sources — PostgreSQL via JDBC and CSV/Excel from ADLS — are natively handled in PySpark, so ADF added no value. Databricks Workflows already handles our orchestration, so bringing in ADF would've just split observability across two tools for zero gain`, children: []
            },
            {
                q: `why 4 hours cadence?`,
                a: `The cadence was decided based on business requirements and source data availability. <br> 💠 Since new operational data was generated throughout the day, a daily refresh would introduce unnecessary delay. <br> 💠 A 4-hour schedule provided multiple intraday updates while keeping compute costs and pipeline overhead reasonable.`,
                children: [
                    {
                        q: `who decided 4 hours?`,
                        a: `The cadence was agreed between the business stakeholders and the data platform team based on reporting SLAs and source data availability. My responsibility was implementing and maintaining the pipelines to meet that SLA.`,
                        children: [],
                    },
                    {
                        q: `what business requirement drove 4 hours?`,
                        a: `The business requirement was that downstream reporting should be refreshed multiple times during the day instead of waiting for the next day's batch. Since new claims and encounter records were continuously generated, the reporting teams wanted relatively fresh data for operational reporting.`,
                        children: [],
                    },
                ],
            },
            {
                q: `What if business later needs CSV data fresher than daily — how would you handle that?`,
                a: `We'd revisit the vendor relationship first — if they can send intraday files, we'd adjust the schedule to match. The pipeline's schedule is driven by actual source capability and business requirement, not hardcoded to a fixed assumption.`,
                children: [],
            },
            {
                q: `<span style='color:green'>Why does PostgreSQL refresh every 4 hours but CSV only daily — isn't that inconsistent?<br>
            So for those 5 out of 6 cycles, isn't your CSV-backed data stale?<br>
            Won't Gold contain stale CSV data?</span>`,
                a: ` Technically Yes, but that's by design.Each source refreshes based on its own business need and its own delivery pattern. <br> 💠 The payer/clearinghouse doesn't have a real-time  feed; the earliest that data available is the next morning when their batch file drops. <br>💠 Our pipeline just reflects that reality — PostgreSQL refreshes every 4 hours because it can, CSV refreshes daily because that's the earliest the data exists at all. <br> 💠 Gold always uses the latest available data from each source.`,
                children: [],
            },
            {
                q: `Late arriving data`,
                a: `<li>We handle late-arriving records using the updated_at watermark rather than the business date.</li>
	<li>Even if a claim relates to an earlier service date, it's picked up automatically in the next incremental run when it's inserted or updated in PostgreSQL</li>
	<li>Our incremental design is based on the agreed data contract that the source application updates updated_at for every insert and update.</li>
    <li>Downstream, Silver uses MERGE, so if a record is reprocessed due to a retry or subsequent update, it's updated rather than duplicated.</li>`
                , children: [
                    {
                        q: `why not look back windows`,
                        a: `<li>Since the source application maintained the updated_at column as part of the agreed data contract, a straightforward watermark-based incremental load was sufficient. Sliding windows are typically introduced when the source timestamps aren't fully reliable or there are replication delays.</li>`
                        , children: [],
                    },],
            },
            {
                q: `why views only for BI`,
                a: `Views give us a decoupling layer between the Gold tables and BI consumers. If we restructure or rename anything in the underlying table, we just update the view — BI reports stay untouched and nothing breaks downstream`,
                children: []
            },
            {
                q:`How email alerts are sent for failures/ dq checks?`,
                a:`When an dq is failed/ new col came notebook calls an Azure Logic App (or similar notification service) via an HTTP request. The Logic App sends an email or Teams notification while the pipeline completes successfully.
                <br>The Platform team  manages the Azure Logic App and provides its endpoint. We invoke that endpoint from our notebooks  whenever conditions such as schema changes, missing files, or data quality issues are detected, while allowing the pipeline to continue if required."
               <pre> <code class="language-python" >
                 expected = {"id","name","age"}
actual = set(df.columns)
new_cols = actual - expected
missing_cols = expected - actual

if new_columns:
    requests.post(
        logic_app_url,
        json={
            "pipeline": "Claims Pipeline",
            "alert": "New columns detected",
            "columns": list(new_columns)
        }
    )
</code></code>`,
                children:[],
            },

        ],
    },
    ///////////PostgreSQL
    {
        cat: `Bronze`,
        q: `Bronze-Overview`,
        ans: ``,
        children: [
            {
                q: `Did you use explicit cols / * whle reading postgres data`,
                a: `We read the incremental data(*), validate that the expected columns are present(given via widgets), select only those columns and Fail/succeed with warning like files, and store the raw data in Parquet. Datatype standardization and business transformations are intentionally deferred to the Silver layer.`,
                children: [],
            },
            {
                q: `Bronze schema checks for Files`,
                a: `Bronze focuses on raw ingestion and schema validation. Read File => It verifies that the incoming data matches the expected structure(cols) =>Add audit cols => Parquet.<br> Req cols ✅ ; if extra=>log and alert ✅ ; missing/rename -Fail Task and alert ❌ <br> Silver then performs data cleansing, including null handling, datatype standardization, deduplication, and business validations before MERGEing into cumulative Delta tables.`,
                children: [],
            },
        ],
    },
    {
        cat: `Bronze`,
        q: `PostgreSQL`,
        answer: ``,
        children: [
            {
                q: `Incremental Loading`,
                a: `<p style="color:#1565C0;">1. Why incremental instead of full load?</p>
<p>
Full loads repeatedly read unchanged data and increase load on the source database, whereas incremental loading transfers only new or updated records, making the pipeline faster and more efficient.
</p>

<p style="color:#1565C0;">2. Why did you use a watermark?</p>
<p>
We use the <code>updated_at</code> column as a watermark to identify records that were inserted or updated since the previous successful run.
</p>

<p style="color:#1565C0;">3. Why <code>updated_at</code> and not <code>created_at</code>?</p>
<p>
<code>created_at</code> captures only new records, whereas <code>updated_at</code> captures both inserts and updates, ensuring no changes are missed.
</p>

<p style="color:#1565C0;">4. Why not CDC?</p>
<p>
Our 4-hour batch requirement was adequately met using watermark-based incremental loading. CDC would have added unnecessary infrastructure and operational complexity.
</p>

<p style="color:#1565C0;">5. Where is the watermark stored?</p>
<p>
We maintain a Delta metadata table with one watermark entry per source table, updated only after a successful Bronze write.
</p>

<p style="color:#1565C0;">6. Why one watermark per table?</p>
<p>
Each table changes independently, so maintaining separate watermarks prevents one table's progress from affecting another.
</p>

<p style="color:#1565C0;">7. When is the watermark updated?</p>
<p>
Only after the data is successfully written to Bronze, ensuring failed runs can be safely retried.
</p>

<p style="color:#1565C0;">8. What if the watermark update fails?</p>
<p>
Since the watermark isn't advanced, the same incremental window is read again during the next run, and downstream MERGE operations keep the pipeline idempotent.
</p>

<p style="color:#1565C0;">9. What if no new data is available?</p>
<p>
The query returns no records, we log a <code>NO_NEW_DATA</code> status in the control table, and the pipeline completes successfully.
</p>

<p style="color:#1565C0;">10. How do you perform the initial load?</p>
<p>
We first executed the one-time initial load notebook, which loaded the complete table without any watermark and initialized the watermark. After that, the regular incremental pipeline took over.</p>

<p style="color:#1565C0;">11. What if <code>updated_at</code> is NULL?</p>
<p>
We treat <code>updated_at</code> as a mandatory column, Our design assumes the source application reliably maintains the <code>updated_at</code> field as part of its data contract.
</p>

<p style="color:#1565C0;">12. What if someone updates old data?</p>
<p>
As long as the application updates the <code>updated_at</code> column, those records are picked up in the next incremental run.
</p>`,
                children: [],
            },
            {
                q: `JDBC COnnectivity & Reads`,
                a: `<div style="margin-bottom:0.1rem;">
    <div style="color:#1565C0;">Q1. How does Databricks connect to the on-prem PostgreSQL database?</div>
    <div>Databricks connects to the on-prem PostgreSQL database using a JDBC connection.</div>
</div>

<div style="margin-bottom:18px;">
    <div style="color:#1565C0;">Q2. JDBC or ODBC? Why JDBC?</div>
    <div>ODBC (Open Database Connectivity) is a generic database connectivity standard. Applications connect to a database through an ODBC driver.<br> while JDBC is Java-based. Since Spark runs on JVM and provides native JDBC support, we used JDBC.</div>
</div>

<div style="margin-bottom:18px;">
    <div style="color:#1565C0;">Q3. How are database credentials managed?</div>
    <div>Credentials are stored securely in Databricks Secrets and retrieved at runtime.</div>
</div>

<div style="margin-bottom:18px;">
    <div style="color:#1565C0;">Q4. Who has access to the PostgreSQL database?</div>
    <div>Our team has read-only access, while the client DBA team manages the database and permissions.</div>
</div>

<div style="margin-bottom:18px;">
    <div style="color:#1565C0;">Q5. Why use a SQL query instead of reading the whole table? </div>
    <div>
        We use a SQL query with the watermark filter so PostgreSQL applies the filter before returning the data. This minimizes data transfer, reduces load on the source database, and only the required incremental records are read into Spark.
    </div>
</div>

<div style="margin-bottom:18px;">
    <div style="color:#1565C0;">Q9. Did you use parallel JDBC reads?</div>
    <div>No. Our data volume was moderate, so a single JDBC connection met the performance requirements.
    <br> But we can partitioned JDBC reads for huge tables, in thatcase we choose a numeric, unique, and evenly distributed partitionColumn. The lowerBound and upperBound are the minimum and maximum values of that column, while numPartitions is selected based on the cluster's available cores, source database connection limits,to achieve parallelism without overwhelming the source database.</div>
</div>

<div style="margin-bottom:18px;">
    <div style="color:#1565C0;">Q11. Did you tune <code>fetchSize</code>?</div>
    <div> Fetch size is the number of rows JDBC fetches from the database in each network request.The default JDBC fetch size provided acceptable performance for our workload. So No we haven't used</div>
</div>

<div style="margin-bottom:18px;">
    <div style="color:#1565C0;">Q12. Why not read from a database replica?</div>
    <div>The client didn't have a reporting replica, and our 4-hour incremental reads imposed acceptable load on the source database.</div>
</div>

<div style="margin-bottom:18px;">
    <div style="color:#1565C0;">Q13. What happens if the database connection fails?</div>
    <div>The pipeline retries twice, and if it still fails, the pipeline is marked as failed and job fails.</div>
</div>

<div style="margin-bottom:18px;">
    <div style="color:#1565C0;">Q14. How do you secure the connection?</div>
    <div>Credentials are managed through Databricks Secrets, while the client infrastructure team manages the underlying network connectivity.</div>
</div>

<div style="margin-bottom:18px;">
    <div style="color:#1565C0;">Q15. Was the connectivity through VPN, ExpressRoute or Private Link?</div>
    <div>I wasn't involved in the infrastructure setup, so I can't confirm the underlying network technology.</div>
</div>

<div style="margin-bottom:18px;">
    <div style="color:#1565C0;">Q16. What is an Isolation Level? which isolation level do you use</div>
    <div>Isolation level determines how a database transaction sees changes made by other concurrent transactions during read or write operations.
    <ul><li>Read Uncommitted → Can see User A's uncommitted change (dirty read).</li>
<li>Read Committed → Sees only committed data (most common).</li></ul>
We didn't configure it explicitly; the database's default isolation level(READ COMMITTED.) was sufficient for our read-only batch ingestion.</div>
</div>`,
                children: [],
            },
            {
                q: `Failure Handling & Retry`,
                a: `<div style="font-family:Segoe UI,Arial,sans-serif; line-height:1.6; font-size:15px;">

  <h3 style="color:#2E86C1;">Failure Handling & Retry</h3>

  <p>
    <span style="color:#1F618D; font-weight:bold;"> 1. What happens if PostgreSQL is unavailable / network error?</span><br>
    We use exponential backoff with retries after <b>30 and 60 seconds</b> to handle transient failures. If the connection still fails after retries, the pipeline is marked as <b>FAILED</b> and an alert is generated for the on-call team.
  </p>

  <p>
    <span style="color:#1F618D; font-weight:bold;"> 2. Why only two retries?</span><br>
    Most transient issues resolve quickly, so two retries balance recovery with avoiding unnecessary delays in the pipeline.
  </p>


  <p>
    <span style="color:#1F618D; font-weight:bold;"> 3. What if the Bronze write fails?</span><br>
    The pipeline fails, the watermark remains unchanged, and the same incremental window is safely reprocessed in the next run.
  </p>


  <p>
    <span style="color:#1F618D; font-weight:bold;"> 4. What if only one PostgreSQL table fails? Will you continue?</span><br>
    No. Since these are core transactional tables, that table's pipeline is marked as <b>FAILED</b> and an alert is generated rather than silently skipping it.
  </p>


  <p>
    <span style="color:#1F618D; font-weight:bold;"> 5. What if the watermark updae fails but bronze parquet is written?</span><br>
Watermark wasn't advanced so next run re-reads the same window — same records land in Bronze again as a new partition. Silver MERGE on business key finds no tracked column changes, so no update, no duplicates. Idempotency holds without any manual intervention  </p>


  <p>
    <span style="color:#1F618D; font-weight:bold;"> 6. Will rerunning create duplicates?</span><br>
    No. Since the watermark isn't advanced after a failure and downstream uses <b>MERGE</b>, rerunning the same incremental window is idempotent.
  </p>


  <p>
    <span style="color:#1F618D; font-weight:bold;"> 7. How do you know a pipeline failed?</span><br>
    The task is marked as <b>FAILED</b> in the control table, and an alert is generated for the operations/on-call team.
  </p>


  <p>
    <span style="color:#1F618D; font-weight:bold;"> 8. Why not skip failed PostgreSQL tables like CSV files?</span><br>
    PostgreSQL contains core transactional data required every four hours, so skipping it would make downstream datasets inconsistent. CSV sources are auxiliary and can be processed later if necessary.
  </p>


  <p>
    <span style="color:#1F618D; font-weight:bold;"> 9. When does the pipeline fail?</span><br>
    The pipeline fails if a core PostgreSQL table cannot be read or written successfully after all configured retries, since incomplete transactional data shouldn't be propagated downstream.
  </p>

</div>`,
                children: [],
            },
            {
                q: `Performance optimization`,
                a: `<div style="font-family:Segoe UI,Arial,sans-serif; line-height:1.6; font-size:15px;">

  <h3 style="color:#2E86C1;">Performance & Optimization</h3>

  <p>
    <span style="color:#1F618D; font-weight:bold;"> 1.  How did you optimize JDBC reads?</span><br>
    We minimized the data transferred by using watermark-based incremental loading with predicate pushdown, so only new or updated records were read. 
  </p> 

  <p>
    <span style="color:#1F618D; font-weight:bold;"> 2.  Why not use parallelism if it improves performance?</span><br>
    We optimize only when there's a business need. Since our pipeline consistently met the SLA, adding complexity wasn't justified.
  </p>

  <p>
    <span style="color:#1F618D; font-weight:bold;"> 3. How do you know the pipeline performance is acceptable?</span><br>
    We monitored pipeline execution time and consistently completed within the four-hour SLA.
  </p>

  <p>
    <span style="color:#1F618D; font-weight:bold;">4. Reading 8–10 GB over JDBC is slow. How did you handle it?</span><br>
    We minimized the data transferred by using watermark-based incremental loading with predicate pushdown, so only new or updated records were read. 
  </p>

  <p>
    <span style="color:#1F618D; font-weight:bold;">4. Did the source tables have indexes?</span><br>
    Yes. The source application maintained indexes on commonly queried columns, including the <b>updated_at</b> column used for incremental extraction, allowing the watermark filter to execute efficiently.
  </p>

</div>
`,
                children: [],
            },
            {
                q: `Watermark metadata Table`,
                a: `<div style="font-family:Segoe UI,Arial,sans-serif; line-height:1.6; font-size:15px;">

  <p>
    <span style="color:#1F618D; font-weight:bold;">1.  What is the purpose of the metadata table?</span><br>
    The metadata table stores the latest successfully processed watermark for each source table, enabling incremental and idempotent ingestion.
  </p>
  <p>
    <span style="color:#1F618D; font-weight:bold;">2.  What information does it store?</span><br>
    It stores the source table name, last processed watermark, last successful run time, and pipeline runid.
  </p>
    <p>
    <span style="color:#1F618D; font-weight:bold;">3. What if no new records are available?</span><br>
    The query returns no records, we log a <b>NO_NEW_DATA</b> status, and the pipeline completes successfully.
  </p>

  <p>
    <span style="color:#1F618D; font-weight:bold;">4. Is watermark update part of the same transaction as the Bronze write?</span><br>
    No. We first ensure the Bronze write completes successfully, then update the metadata table. This prevents advancing the watermark before the data is safely written.
  </p>
  <p>
    <span style="color:#1F618D; font-weight:bold;">5. How do you manage multiple source tables?</span><br>
    Each source table has its own metadata record and watermark, allowing every table to progress independently.
  </p>
  <p>
    <span style="color:#1F618D; font-weight:bold;">7. What if two tasks try to update metadata table?</span><br>
Multiple tasks can update the metadata table simultaneously because each task updates the watermark for a different source table. Concurrent updates to the same watermark record is not possible as 1 pipeline has 1 task for a particular table.  </p>
 <p>
    <span style="color:#1F618D; font-weight:bold;">8. What if two pipeline runs execute concurrently?</span><br>
    We prevent concurrent executions using Databricks Workflow concurrency settings, ensuring only one active run per pipeline at a time.
  </p>
</div>`,
                children: [],
            },
            {
                q: `idempotency`,
                a: `
                <div style="font-family:Segoe UI,Arial,sans-serif; line-height:1.6; font-size:15px;">

  <p>
    <span style="color:#1F618D; font-weight:bold;">❓. How do you handle deleted records?</span><br>
    Our source doesn't expose deletes, so we only process inserts and updates. Physical deletes are handled upstream as per the agreed data contract.
  </p>
  <p>
    <span style="color:#1F618D; font-weight:bold;">2. What if a source record is updated while you're reading it?</span><br>
The extraction reads a point-in-time snapshot of the source data(12:00:00 000). If a record is updated after that snapshot is taken(12;00:00 001), it may not be included in the current run. However, since we advance the watermark to the maximum updated_at from the successfully processed data—not the current time—it is automatically picked up in the next incremental run, ensuring no data loss.  </p>

  <p>
    <span style="color:#1F618D; font-weight:bold;">3. What if the same incremental window is processed twice?</span><br>
Safe by design — Silver MERGE on business key means reprocessing the same window just skips the updates/ since no tracked cols are changed. No duplicates created, no data loss. That's the idempotency guarantee.  </p>

  <p>
    <span style="color:#1F618D; font-weight:bold;">4. How do you ensure idempotency?</span><br>
    We update the watermark only after a successful Bronze write, and Silver/Gold use MERGE, so rerunning the same data produces the same final state.
  </p>

  <p>
    <span style="color:#1F618D; font-weight:bold;">5. What if the source clock differs from Databricks?</span><br>
    We rely on the source database's <b>updated_at</b> timestamps rather than the Databricks cluster time, avoiding clock synchronization issues.<br><code>last_updated=df.select(max(df["updated_at"])).collect()[0][0]</code>
  </p>


</div>`,
                children: [],
            },
            {
                q: `edge cases`,
                a: `<div style="font-family:Segoe UI,Arial,sans-serif; line-height:1.6; font-size:15px;">

<p>
<span style="color:#1F618D;font-weight:bold;">❓ What if two records have the same updated_at?</span><br>
We rely on the source maintaining unique update timestamps. If needed, a composite watermark using <b>(updated_at, primary key)</b> can eliminate ambiguity.
</p>
<p>
<span style="color:#1F618D;font-weight:bold;">2. bronze table has both update_at and ingetion_timestamp,ingetion_date?</span><br>
Yes.updated_at comes from the source and drives our watermark logic. ingest_timestamp is added by the pipeline at write time and is purely for audit and traceability — they're independent columns serving different purposes."
</p>
<p>
<span style="color:#1F618D;font-weight:bold;">3. What about timestamp precision?</span><br>
PostgreSQL updated_at is typically microsecond precision and compare values consistently without truncation.
</p>

<p>
<span style="color:#1F618D;font-weight:bold;">4. What if extraction takes a long time?</span><br>
Since we process only incremental data every four hours, extraction comfortably completes within our SLA.
</p>

</div>`,
                children: [],
            },
            {
                q: `Monitorng`,
                a: `<div style="font-family:Segoe UI,Arial,sans-serif; line-height:1.6; font-size:15px;">

<h3 style="color:#2E86C1;">Monitoring</h3>

<p>
<span style="color:#1F618D;font-weight:bold;">❓ How do you capture row counts?</span><br>
We capture the processed row count after successful ingestion and store it in the control table for monitoring.
</p>

<p>
<span style="color:#1F618D;font-weight:bold;">❓ How do you perform reconciliation?</span><br>
We compare source and target row counts for each run to identify any unexpected discrepancies.
</p>

<p>
<span style="color:#1F618D;font-weight:bold;">❓ Why do you need a control table?</span><br>
It tracks pipeline execution status, dependencies, row counts, timestamps, and prevents duplicate file processing.
</p>

<p>
<span style="color:#1F618D;font-weight:bold;">❓ How are failures monitored?</span><br>
Failed tasks generate alerts, and the execution status is recorded in the control table for operational monitoring.
</p>

<p>
<span style="color:#1F618D;font-weight:bold;">❓ What was your SLA?</span><br>
The pipeline was designed to refresh transactional data every four hours and consistently completed within that SLA.
</p>

</div>`,
                children: [],
            },
            {
                q: `security`,
                a: `<div style="font-family:Segoe UI,Arial,sans-serif; line-height:1.6; font-size:15px;">

<p>
<span style="color:#1F618D;font-weight:bold;">1. Why use Databricks Secrets?</span><br>
They eliminate hardcoded credentials and provide centralized, secure secret management.
</p>

<p>
<span style="color:#1F618D;font-weight:bold;">2. Was data encrypted?</span><br>
Yes. Data was encrypted both in transit and at rest using Azure-managed encryption.
</p>

</div>`,
                children: [],
            },




        ],
    },
    /////////////parquet
    {
        cat: `Bronze`,
        q: `Parquet`,
        answer: ``,
        children: [
            {
                q: `click here`,
                a: `<div style="font-family:Segoe UI,Arial,sans-serif; line-height:1.6; font-size:15px;">

<p>
<span style="color:#1F618D;font-weight:bold;">1. Why Parquet?</span><br>
Bronze is intended to preserve raw source data. Since we don't perform updates or MERGE operations there, Parquet keeps storage simple and lightweight. Delta features such as ACID transactions and MERGE become valuable from the Silver layer onwards.
            <br> <code>But we use Delta in our project ? </code><br>
            💠 That's a valid approach. Many organizations use Delta across all Medallion layers. In our project, the design decision was to keep Bronze lightweight and introduce Delta where transactional features became necessary.</p>

<p>
<span style="color:#1F618D;font-weight:bold;">2. Why not Delta?</span><br>
Bronze doesn't require ACID transactions, time travel, or frequent updates, so Parquet keeps the raw ingestion layer simple and cost-effective.
</p>

<p>
<span style="color:#1F618D;font-weight:bold;">3. How is Bronze partitioned?</span><br>
We partition Bronze by <b>ingest_date</b> for efficient partition pruning and manageable metadata </p>

<p>
<span style="color:#1F618D;font-weight:bold;">4. Why partition by ingest_date instead of business date?</span><br>
Business date partitioning in Bronze breaks on late-arriving records — a June 1st event arriving June 30th would require rewriting a 29-day-old partition. Ingest date keeps Bronze strictly append-only; late arrivals just land in today's partition and Silver MERGE handles them correctly on business key</p>

<p>
<span style="color:#1F618D;font-weight:bold;">5. How did you handle small files?</span><br>
Our ingestion volume was moderate, so small files weren't a significant issue. Downstream Delta tables optimize file layout during writes.
</p>

<p>
<span style="color:#1F618D;font-weight:bold;">6. What compression did Parquet use?</span><br>
We used Parquet's default Snappy compression, which provides a good balance between compression and read performance.
</p>

<p>
<span style="color:#1F618D;font-weight:bold;">7.  If Delta stores data as Parquet files, why not use Parquet directly?</span><br>
Parquet is only a file format. Delta adds a transaction log that enables ACID transactions, MERGE, schema enforcement, versioning, and reliable concurrent reads and writes.</p>

</div>`,
                children: [],

            },

        ],
    },
    /////////////////////////////////CSV
    {
        cat: "Bronze",
        q: "CSV",
        answer: ``,
        children: [
            {
                q: `what if CSV file is delayed?`,
                a: `Our PostgreSQL pipeline runs every 4 hours, but CSV files are vendor-delivered once a day, so we schedule their ingestion separately at a fixed cutoff time.<br> At the scheduled time, the pipeline checks whether the expected file is available. If it is, we process it. If it's missing, we record the status as SKIPPED_FILE_NOT_FOUND in our control table, generate an alert, and continue processing the remaining sources.<br> We don't wait for delayed files beyond cutoff time, because that would make downstream Silver and Gold processing unpredictable. Once the vendor delivers the file, Ops will process the file manualyy.`,
                children: [
                    {
                        q: `how do you decide the cutoff time?`,
                        a: `It's based on historical delivery patterns of the vendor — most of our files arrive via overnight batch from payers and clearinghouses, so by early morning they're reliably present.<br> 💠 We picked a cutoff with enough buffer for normal variance. If a vendor consistently misses that window, that's a conversation with them to either adjust our schedule or fix their delivery timing`,
                        children: [],
                    },],
            },
            {
                q: `duplicte file , corrupt file , schema changes`,
                a: `<ul><li>Duplicate files by vendor; The control table tracks processed files, so previously processed files are ignored.</li>
                    <li>Empty file → Header-only file → process successfully with 0 rows; 0-byte file → treat as invalid and alert.</li>
                    <li>Corrupt file → Spark cannot read or parse the file (e.g., broken delimiters, unclosed quotes, truncated/partial file)=> we fail the ingestion, log the error in the control table.</li>
                    <li>MISSING/RENAME REQ COLS -> The pipeline fails schema validation, logs the error, generates an alert, and waits for a corrected file or approved schema update.
</li><li>if new col: If all expected columns are present, we ignore the additional column, log a schema warning, and notify the team for review without interrupting the pipeline.
</li></ul>
                    `,
                children: [],
            },

            {
                q: `what if some failed, skipped ,1 processed`,
                a: `Even if all three CSV sources fail, we don't fail the entire Bronze CSV job. Each source records its own status in the control table—such as FAILED or SKIPPED_FILE_NOT_FOUND—and downstream Silver and Gold pipelines skip processing for those sources based on the control table. <br> Because the job completed its intended work—checking every configured source, recording each source's status, and updating the control table. Individual source failures are handled separately and don't represent a failure of the orchestration itself.,`,
                children: [],
            },
            {
                q: `what if thre are 2 files at processing. which one it picks `,
                a: `We expect one file per source per business day. If multiple files are detected, the pipeline treats it as a validation failure, alerts the operations team, and waits for confirmation instead of arbitrarily choosing one.`,
                children: [],
            },
            {
                q: `what if yesterday file arrived after processing today's file?`,
                a: `The downstream data remains temporarily stale until the operations team manually reruns the ingestion pipeline to process the delayed file; no permanent data is lost since the file is still available.`,
                children: [
                    {
                        q: `is this a limitation/ data need to reprocess`,
                        a: `Yes, it's a limitation in terms of data freshness, not data integrity. Until the delayed file is ingested, downstream reporting is temporarily stale. Once the file is processed through a manual rerun, MERGE operations update the downstream layers without requiring previously processed data to be reloaded.`,
                        children: [],
                    },
                ],
            },
            {
                q: `how ref files icd,cpt,provider roster ,fee_schedule are handles`,
                a: `The reference files are provided by the respective business teams—for example, the provider management team publishes the monthly provider roster, while finance provides the annual fee schedule and the client's data operations team uploads all these files to the ADLS landing area.<br> Since these datasets are refreshed only monthly or annually and delivery dates can vary, the operations team manually triggers the corresponding Databricks Workflow after confirming the file has been received.`,
                children: [],
            },
            {
                q: `is eligibility , claim adjudication , prior_auth whole or just delta records we receive ?`,
                a: `The eligibility, claims adjudication, and prior authorization files are daily incremental extracts containing only new or changed records since the previous delivery. We ingest these deltas and use MERGE in Silver to maintain a cumulative dataset without creating duplicates.`,
                children: [],
            },
        ],
    },
    //////////////////////////////////////////////////////////////Silver
    {
        cat: "Silver",
        q: "Arcitecture - Silver",
        answer: ``,
        children: [
            {
                q: `Purpose and Storage`,
                a: `
                <p><span style="color:#1565C0;"><b>Q1. What is the purpose of the Silver layer?</b></span></p>
<p>The Silver layer transforms raw Bronze data into clean, standardized, and trusted datasets by applying data quality validations, deduplication, datatype standardization, and business-level cleansing before making it available for downstream processing.</p>

<p><span style="color:#1565C0;"><b>Q2. Why can't we use Bronze directly?</b></span></p>
<p>Bronze preserves raw source data exactly as received, including duplicates, inconsistent formats, and invalid records. Gold requires reliable, standardized data, so Silver acts as the quality gate between raw ingestion and business consumption.</p>

<p><span style="color:#1565C0;"><b>Q3. What transformations happen in Silver?</b></span></p>
<p>We perform datatype standardization, null handling, deduplication, business key validation, audit enrichment, and MERGE incremental changes into cumulative Delta tables. Reference datasets are fully refreshed whenever new versions arrive.</p>

<p><span style="color:#1565C0;"><b>Q4. Is there a one-to-one mapping between Bronze and Silver?</b></span></p>
<p>Yes. Each Bronze operational dataset has a corresponding Silver table with the same business entity, but Silver contains cleaned, standardized, and deduplicated data instead of raw records.</p>

<p><span style="color:#1565C0;"><b>Q5. Does Silver keep history?</b></span></p>
<p>NO. Silver is intended to provide the latest trusted operational view. Historical tracking belongs in Gold, where dimensions maintain business history using SCD Type 2.</p>

<p><span style="color:#1565C0;"><b>Q6.1 Why not maintain history in Silver too?</b></span></p>
<p>Maintaining history in both Silver and Gold duplicates storage and processing. Since business history is already handled in Gold, Silver focuses on providing a clean operational view.</p>

<p><span style="color:#1565C0;"><b>Q7. Why not load Gold directly from Bronze?</b></span></p>
<p>That would mix data cleansing with business transformations, increasing complexity and duplication. Silver centralizes reusable cleansing logic so Gold can focus only on analytics-ready modeling.</p>
####

<p><span style="color:#1565C0;"><b>Q3. Why is MERGE used in the Silver layer?</b></span></p>
<p>MERGE performs inserts and updates atomically in a single transaction, simplifying the logic while maintaining data consistency witoutusing INSERT and UPDATE statements seperately.</p>

<p><span style="color:#1565C0;"><b>Q4. Why not overwrite the Silver table every day?</b></span></p>
<p>Only a small portion of records changes daily. MERGE processes only incremental changes, reducing compute time, I/O, and overall pipeline execution cost.</p>

<p><span style="color:#1565C0;"><b>Q5. What is the MERGE matching condition?</b></span></p>
<p>We match records using the business key of each dataset, such as patient_id, provider_id, claim_id, or encounter_id, depending on the entity being processed.</p>

<p><span style="color:#1565C0;"><b>Q9. Does MERGE support ACID transactions?</b></span></p>
<p>Yes. Delta Lake guarantees ACID transactions, ensuring that either the entire MERGE succeeds or no changes are committed.</p>

<p><span style="color:#1565C0;"><b>Q10. What happens if the job fails during MERGE?</b></span></p>
<p>No partial updates are committed. Delta rolls back the incomplete transaction, keeping the Silver table in a consistent state.</p>

<p><span style="color:#1565C0;"><b>Q10. Why MERGE for operational tables but full reload for reference tables?
</b></span></p>
<p>Operational tables change frequently, so incremental MERGE avoids unnecessary processing. Reference files are small and replaced completely by the source, so full reload is simpler.</p>

<p><span style="color:#1565C0;"><b>Q12. Why is Delta a good choice for production pipelines?</b></span></p>
<p>It provides reliable transactions, scalable incremental processing, schema management, and better operational stability than plain Parquet.</p>
`,

                children: [],
            },
            {
                q: `DQ, cleansing & Schema`,
                a: `
<p><span style="color:#1565C0;"><b>Q2. Why are data quality validations performed in Silver instead of Bronze?</b></span></p>
<p>Bronze preserves raw source data for audit and replay. Silver is the first layer where data is cleaned and standardized for downstream consumption.</p>

<p><span style="color:#1565C0;"><b>Q3. How do you handle null values?</b></span></p>
<p>Mandatory business key columns such as patient_id or claim_id cannot be null, so those invalid records are quarantined to a separate bad_records table with the validation failure reason. Optional columns are allowed to remain null or assigned default values based on business requirements.</p>

<p><span style="color:#1565C0;"><b>Q4. Which columns are mandatory in your project?</b></span></p>
<p>Business key columns like patient_id, provider_id, encounter_id, and claim_id are mandatory because they uniquely identify operational records.</p>

<p><span style="color:#1565C0;"><b>Q6. How do you standardize data types?</b></span></p>
<p>Columns are explicitly cast to their expected data types, such as dates to DATE, timestamps to TIMESTAMP, and numeric values to appropriate numeric types.</p>

<p><span style="color:#1565C0;"><b>Q7. Why is datatype standardization important?</b></span></p>
<p>It ensures consistent joins, accurate calculations, and prevents runtime errors in downstream processing.</p>

<p><span style="color:#1565C0;"><b>Q8. How do you remove duplicate records?</b></span></p>
<p>Duplicates are identified using the business key. If multiple records exist for the same key, only the latest record is retained before the MERGE.</p>

<p><span style="color:#1565C0;"><b>Q9. How do you identify the latest duplicate record?</b></span></p>
<p>We use a window function with ROW_NUMBER() ordered by the source update timestamp in descending order and keep only the first record.</p>

<p><span style="color:#1565C0;"><b>Q10. Why remove duplicates before MERGE?</b></span></p>
<p>MERGE expects a single source record for each business key. Removing duplicates prevents conflicts and ensures deterministic updates.</p>
###
<p><span style="color:#1565C0;"><b>Q1. How do you handle schema changes from source?</b></span></p>
<p> We enforcement schema  at write time, so unexpected schema changes fail  rather than silently corrupting Silver. We can handle schema evolution explicitly when needed using mergeSchema
</p>

<p><span style="color:#1565C0;"><b>Q1. What is schema enforcement?</b></span></p>
<p>Schema enforcement ensures incoming data matches the expected table schema. Records with incompatible data types or invalid columns are rejected, maintaining data consistency.</p>

<p><span style="color:#1565C0;"><b>Q1. Do you use schema enforcement in silvere</b></span></p>
<p> Yes. We enforce schemas to ensure incoming data matches the expected structure before applying business transformations, preventing unexpected changes from propagating downstream.
</p>

<p><span style="color:#1565C0;"><b>Q3. What is schema evolution?</b></span></p>
<p>Schema evolution allows compatible schema changes, such as adding new columns, without recreating the Delta table or reloading historical data.</p>

<p><span style="color:#1565C0;"><b>Q3. Do you use schema evolution?</b></span></p>
<p> No. We don't enable automatic schema evolution for production healthcare data. Any schema change is reviewed, implemented through a controlled code release, and then reprocessed.
</p>

<p><span style="color:#1565C0;"><b>Q7. What happens if the datatype changes from INT to STRING?</b></span></p>
<p>This is treated as a breaking schema change. The pipeline fails validation until the schema change is reviewed and handled appropriately.</p>

<p>
<span style="color:#1F618D;font-weight:bold;"> Why not allow schema evolution automatically?</span><br>
Automatic schema evolution can silently introduce unexpected columns or structural changes. We prefer controlled changes to protect downstream consumers.
</p>

<p><span style="color:#1565C0;"><b>Q8. Does Delta automatically handle every schema change?</b></span></p>
<p>No. Delta supports compatible schema evolution, but breaking changes still require developer intervention.</p>

<p><span style="color:#1565C0;"><b>Q9. How does schema enforcement improve data quality?</b></span></p>
<p>It prevents inconsistent data structures from entering Silver, reducing downstream failures and ensuring predictable table schemas.</p>


`,
                children: [],
            },
            {
                q: `Idempotency , failure,retry`,
                a: `
                <p><span style="color:#1565C0;"><b>Q1. What is idempotency?</b></span></p>
<p>Idempotency means running the same pipeline multiple times with the same input produces the same final result without creating duplicate or inconsistent records.</p>

<p><span style="color:#1565C0;"><b>Q3. How do you achieve idempotency in your Silver layer?</b></span></p>
<p>We deduplicate incoming data and use Delta MERGE based on business keys, ensuring existing records are updated and new records are inserted only once.</p>

<p><span style="color:#1565C0;"><b>Q4. How do you process incremental data?</b></span></p>
<p>Bronze receives incremental operational data, and Silver processes only the newly arrived records before merging them into cumulative Delta tables.</p>

<p><span style="color:#1565C0;"><b>Q6. How do you identify records to update?</b></span></p>
<p>Records are matched using the business key during the MERGE operation. If the key exists, the record is updated; otherwise, a new record is inserted.</p>

<p><span style="color:#1565C0;"><b>Q9. Can Silver recover after a pipeline failure?</b></span></p>
<p>Yes. Since the pipeline is idempotent, it can be safely rerun after fixing the issue, and Delta ensures only valid committed transactions are retained.</p>

<p><span style="color:#1565C0;"><b>Q10. What role does Delta Lake play in idempotency?</b></span></p>
<p>Delta Lake provides ACID transactions and atomic MERGE operations, ensuring consistent results even when pipelines are retried.</p>

###
<p><span style="color:#1565C0;"><b>Q1. How do you handle failures in the Silver pipeline?</b></span></p>
<p>If a pipeline fails, the execution stops and no partial data is committed because Delta Lake provides atomic transactions. After fixing the issue, the job can be safely rerun.</p>

<p><span style="color:#1565C0;"><b>Q5. What information do you log during processing?</b></span></p>
<p>We capture audit information such as  processing timestamp, source file details, and pipeline execution status to support troubleshooting and auditing.</p>

<p><span style="color:#1565C0;"><b>Q7. Why quarantine invalid records instead of dropping them?</b></span></p>
<p>Quarantining preserves invalid records for investigation and possible correction without affecting the quality of trusted Silver data.</p>

<p><span style="color:#1565C0;"><b>Q10. How does Delta Lake help during failures?</b></span></p>
<p>Delta provides ACID transactions and versioning, ensuring failed writes are rolled back and previously committed data remains available for reading.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Can users still read the Silver table while a MERGE is running?</b></span></p>
<p>Yes. Delta's snapshot isolation allows readers to access the last committed version until the current transaction completes.</p>
`,
                children: [],
            },
            {
                q: `Optimizations`,
                a: `

<p><span style="color:#1565C0;"><b>Q2. Why is performance optimization important in Silver?</b></span></p>
<p>Silver processes cleaned operational data consumed by multiple downstream pipelines, so faster execution reduces overall pipeline latency and compute cost.</p>

<p><span style="color:#1565C0;"><b>Q1. How did you optimize the performance of your Silver pipelines?</b></span></p>
<p>We optimized Spark jobs by processing only incremental data, using Delta MERGE instead of full reloads, periodically running OPTIMIZE to compact small files, applying Z-ORDER on frequently filtered business keys, and caching DataFrames only when reused. </p>


<p><span style="color:#1565C0;"><b>Q3. Why do small files affect performance?</b></span></p>
<p>>Frequent MERGE operations generate many small files over time. Reading thousands of small files increases metadata operations and task scheduling overhead, resulting in slower query and pipeline execution.</p>

<p><span style="color:#1565C0;"><b>Q4. How do you solve the small file problem?</b></span></p>
<p>We periodically run Delta OPTIMIZE, which compacts many small files into fewer larger files, improving read performance.
</p>

<p><span style="color:#1565C0;"><b>Q5.  How often do you run OPTIMIZE</b></span></p>

<p> We scheduled OPTIMIZE periodically based on table growth and query performance. In our environment, a roughly biweekly schedule provided a good balance between query performance and compute cost<br>

<p><span style="color:#1565C0;"><b>Q5. What is OPTIMIZE?</b></span></p>
<p>OPTIMIZE is a Delta Lake command that compacts small files into larger files to improve query efficiency and reduce file management overhead.</p>

<p><span style="color:#1565C0;"><b>Q6. What is Z-ORDER?</b></span></p>
<p>Z-ORDER is a Delta Lake optimization that colocates related data within files based on specified columns. This improves data skipping, allowing Spark to read fewer files when queries filter on those columns.</p>

<p><span style="color:#1565C0;"><b>Q6.1 Why did you choose patient_id, provider_id, and claim_id for Z-ORDER?</b></span></p>
<p>These are frequently used in joins and lookups by downstream pipelines. Clustering data on these columns improves data skipping and reduces I/O during query execution.</p>

<p><span style="color:#D32F2F;"><b>Q6.2 Can you Z-ORDER every column in a table?</b></span></p>
<p>No. Z-ORDER should be applied only to a small number of frequently filtered or joined columns. Using too many columns reduces its effectiveness and increases optimization time.</p>

<p><span style="color:#1565C0;"><b>Q8. How do partitioning and Z-ORDER differ?</b></span></p>
<p>Partitioning eliminates unnecessary partitions during reads, while Z-ORDER improves data locality within those partitions by clustering frequently queried columns.</p>

<p><span style="color:#1565C0;"><b>Q9. Did you partition your Silver tables?</b></span></p>
<p>No. Our Silver tables are cumulative and relatively moderate in size (~45–50 GB/day across all datasets). We relied on Delta optimization techniques instead of creating many partitions that could lead to small-file issues.</p>

<p><span style="color:#1565C0;"><b>Q11. What is VACUUM?</b></span></p>
<p>VACUUM removes obsolete data files that are no longer referenced by the Delta transaction log, helping reclaim storage space.</p>

<p><span style="color:#1565C0;"><b>Q12. Does VACUUM improve query performance?</b></span></p>
<p>No. Its primary purpose is storage cleanup. Query performance is mainly improved through OPTIMIZE and Z-ORDER.</p>

<p><span style="color:#1565C0;"><b>Q10. When do you use cache?</b></span></p>
<p>We cache DataFrames only when they are reused multiple times within the same job. For one-time transformations, caching is avoided because it unnecessarily consumes cluster memory.</p>

<p><span style="color:#1565C0;"><b>Q13. Did you use Time Travel?</b></span></p>
<p>Yes. Time Travel was used mainly for debugging, data validation, and recovering previous table versions when needed.</p>

                `,
                children: [],
            },
            {
                q: `Edge cases, Production &Traps , real time , Backfills
                `,
                a: `

--<p><span style="color:#1565C0;"><b>Q3. What if the source sends a delete?</b></span></p>
<p>In our project, source deletes are not received. If they were introduced in the future, the MERGE logic could be extended to delete or soft-delete the corresponding Silver record based on business requirements.</p>

<p><span style="color:#1565C0;"><b>Q6. Why don't you use Change Data Feed (CDF)?</b></span></p>
<p>Change Data Feed is mainly useful for tracking changes within Delta tables. Since our Silver layer consumes incremental data from Bronze and maintains the latest state using MERGE, enabling CDF was not necessary for our current architecture</p>

<p><span style="color:#1565C0;"><b>Q7. Why not use SCD Type 2 in Silver?</b></span></p>
<p>Silver is intended to provide the latest trusted operational view. Historical tracking belongs in Gold, where dimensions maintain business history using SCD Type 2.</p>

<p><span style="color:#1565C0;"><b>Q10. If someone accidentally deletes data from the Silver table, how can you recover it?</b></span></p>
<p>Delta Lake Time Travel allows recovery of previous table versions, provided the required version has not been removed by VACUUM.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why not perform all transformations in Gold?</b></span></p>
<p>Cleaning data separately in Silver makes it reusable across multiple Gold datasets and avoids duplicating validation logic in every downstream pipeline.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: What is the single most important responsibility of the Silver layer?</b></span></p>
<p>To transform raw Bronze data into a clean, validated, standardized, and trusted dataset that serves as the foundation for all downstream processing.</p>

####Bckfills
<p><span style="color:#1565C0;"><b>Q1. What is a historical backfill?</b></span></p>
<p>A historical backfill is the process of loading and processing previously unavailable historical data  to populate downstream tables.</p>

<p><span style="color:#1565C0;"><b>Q2. When is a historical backfill required?</b></span></p>
<p>It is required during initial platform setup(running from 3 months, need last  year), after extended pipeline failures(continuos 3 days), when onboarding a new data source, or when business requests historical reporting.</p>

<p><span style="color:#1565C0;"><b>Q3. How would you perform a historical backfill in your project?</b></span></p>
<p>I would ingest the historical data into Bronze and process it through the existing Silver pipeline using the same validations, deduplication, and MERGE logic as the daily load.</p>

<p><span style="color:#1565C0;"><b>Q5. Will historical backfill create duplicate records?</b></span></p>
<p>No. The Silver layer uses idempotent processing with MERGE based on business keys, so existing records are updated and new records are inserted without creating duplicates.</p>

<p><span style="color:#1565C0;"><b>Q8. How do you ensure historical data follows the same business rules as current data?</b></span></p>
<p>We reuse the same production pipeline and transformation logic with backfill mode, ensuring historical and incremental data are processed consistently.</p>

<p><span style="color:#1565C0;"><b>Q9. What challenges can occur during a historical backfill?</b></span></p>
<p>Large data volumes can increase processing time and compute costs, so backfills are typically executed in batches and monitored closely.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: How is a historical backfill different from a regular incremental load?</b></span></p>
<p>Incremental loads process only newly arrived data, whereas historical backfills process older data that was never loaded or needs to be reprocessed.</p>

<p><span style="color:#D32F2F;"><b> How do you backfill last 2 years data?</b></span></p>
<p>I would execute the existing pipeline in backfill mode, passing the required date range. <br>Rather than processing two years in a single run, I would process it in smaller batches (for example monthly) and monitor each execution.<br> Since the Silver layer uses idempotent MERGE operations, failed batches can be safely retried without creating duplicate records.
<code class="language-python">
##inside bronze
if mode == "daily":
      query= "where update_at>last_ts"

else:
      query= "select * from table where update_at between start_date and end_date"
</code>
</p>
`,
                children: [],
            },
            {
                q: `SChenario `,
                a: `
                <p><span style="color:#1565C0;"><b>Q1. Why is the Silver layer stored as cumulative tables instead of daily tables?</b></span></p>
<p>Cumulative tables provide a single, up-to-date view of each business entity, making downstream joins and analytics simpler while avoiding unnecessary unions across daily datasets.</p>

<p><span style="color:#1565C0;"><b>Q2. Why don't you join multiple tables in the Silver layer?</b></span></p>
<p> Silver stays 1:1 with Bronze intentionally — each Silver table is Bronze's cleaned counterpart, same grain, so lineage stays traceable. Joining/combining tables (e.g., Claims + Diagnoses) is a Gold concern, not Silver's job.
</p>

<p><span style="color:#1565C0;"><b>Q3. What happens if a required source table is missing for today's run?</b></span></p>
<p>The affected Silver pipeline fails, preventing incomplete data from being loaded. The issue is investigated before rerunning the pipeline.</p>

<p><span style="color:#1565C0;"><b>Q4. Can Gold consume Bronze directly if required?</b></span></p>
<p>Technically yes, but it is not recommended because Bronze contains raw, unvalidated data. Gold should consume only trusted Silver datasets.</p>

<p><span style="color:#1565C0;"><b>Q5. How would you backfill six months of historical data?</b></span></p>
<p>We would ingest the historical data into Bronze, process it through the same Silver transformation logic, and use MERGE to populate the cumulative Delta tables, ensuring consistency with regular pipeline executions.</p>

<p><span style="color:#1565C0;"><b>Q6. What makes your Silver layer production-ready?</b></span></p>
<p>It uses incremental processing, Delta MERGE, schema enforcement, data quality validation, deduplication, idempotent processing, Delta optimizations, and centralized monitoring through Databricks Workflows.</p>

<p><span style="color:#D32F2F;"><b>Q.7 If Silver only stores the latest record, what happens if a patient's address changes?</b></span></p>
<p>The latest patient record replaces the previous version in Silver through a MERGE operation. Historical address changes are preserved later in the Gold Patient Dimension using SCD Type 2.</p>

<p><span style="color:#D32F2F;"><b> Q8. Why don't you MERGE the reference files like ICD or CPT?</b></span></p>
<p>Reference datasets are relatively small and delivered as complete versions. We perform a full refresh whenever a new version is received, which is simpler and more efficient than incremental MERGE.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: What happens if duplicate records contain different values?</b></span></p>
<p>We retain the latest record based on the source update timestamp, assuming it represents the most recent operational state.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Can idempotency be achieved using INSERT INTO instead of MERGE?</b></span></p>
<p>No. Repeated INSERT operations create duplicate records. MERGE updates existing records and inserts only new ones, making reruns safe.</p>

p><span style="color:#D32F2F;"><b>Interview Trap: Why didn't you partition the Silver tables?</b></span></p>
<p>Our Silver tables did not justify partitioning because it could create excessive small files. Delta OPTIMIZE and Z-ORDER provided better performance for our workload.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why not cache every DataFrame?</b></span></p>
<p>Unnecessary caching wastes executor memory and may reduce overall Spark performance. Cache should only be used when the same DataFrame is reused multiple times.</p>

`,
                children: [],
            },
        ],
    },
    //////////////////////////////////////////////////////////Gold
    {
        cat: "Gold",
        q: "Arcitecture - Gold",
        answer: ``,
        children: [
            {
                q: `Purpose of Gold & Incremental Processing`,
                a: `
                <div>
<p><span style="color:#1565C0;"><b>Q: What is the purpose of the Gold layer?</b></span><br>
Gold is our business consumption layer. It reads incremental data from the Silver layer, enriches it with SCD Type 2 dimensions and reference datasets, builds business-ready fact and dimension tables using a Star Schema, and loads them incrementally using Delta MERGE for downstream reporting and analytics.</p>
<p><span style="color:#1565C0;"><b>Q: Why not query Silver directly?</b></span><br>
Silver contains normalized operational data. Gold centralizes joins, history, and business logic for consistent reporting.</p>

<p><span style="color:#1565C0;"><b>Q: Who consumes Gold?</b></span><br>
Finance, BI, and Data Science teams consume Gold datasets.</p>

<p><span style="color:#1565C0;"><b>Q: What transformations happen in Gold?</b></span><br>
Dimensional modeling, SCD Type 2 history, business enrichments, surrogate key lookups, reference joins, and analytics-ready fact creation.</p>

<p><span style="color:#1565C0;"><b>Q: Why separate facts and dimensions?</b></span><br>
Dimensions describe entities, while facts store measurable business events for efficient analytics.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why can't Silver become the reporting layer?</b></span><br>
Silver is optimized for data quality and integration, not analytics. Reporting directly on Silver duplicates business logic.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: If BI defines KPIs, why does Gold exist?</b></span><br>
Gold provides standardized facts and dimensions. BI defines dashboard-specific KPIs using those datasets.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Could you eliminate the Gold layer?</b></span><br>
Only in very small environments. Production systems benefit from Gold's standardized business model.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Is Gold rebuilt every day?</b></span><br>
No.
We process the incremental data available in Silver for each run and compare it with the current Gold records. Business key matching and tracked attribute comparison determine whether a new SCD2 version or fact update is required
</p>
####

<p><span style="color:#1565C0;"><b>Q: How is your Gold layer loaded?</b></span><br>
The Gold layer is loaded incrementally by processing only new and changed records from Silver. It reduces compute cost, shortens runtime, and scales efficiently.</p>

<p><span style="color:#1565C0;"><b>Q: How are dimensions loaded incrementally?</b></span><br>
Latest Silver records are compared with current Gold dimensions, creating new SCD2 versions only when tracked business attributes change.</p>

<p><span style="color:#1565C0;"><b>Q: How are fact tables loaded incrementally?</b></span><br>
New claims are inserted and changed claims are updated using Delta MERGE.</p>

<p><span style="color:#1565C0;"><b>Q: Why use MERGE?</b></span><br>
MERGE efficiently handles inserts and updates while preventing duplicate records.</p>

<p><span style="color:#1565C0;"><b>Q: What is the MERGE key for facts?</b></span><br>
The business key of the claim is used to identify existing fact records.</p>

<p><span style="color:#1565C0;"><b>Q: How do you ensure idempotency?</b></span><br>
Deterministic MERGE conditions prevent duplicate records during reruns.</p>

<p><span style="color:#1565C0;"><b>Q: Do you rebuild the full Gold layer during backfills?</b></span><br>
No. Only the affected date range or impacted records are reprocessed whenever possible.</p>

<p><span style="color:#1565C0;"><b>Q: Can facts and dimensions be loaded independently?</b></span><br>
Yes. Dimensions are loaded first so facts can resolve surrogate keys.</p>

<p><span style="color:#1565C0;"><b>Q: Why are dimensions loaded before facts?</b></span><br>
Facts depend on valid surrogate keys from the dimensions.</p>

<p><span style="color:#1565C0;"><b>Q: What if no new records arrive?</b></span><br>
The pipeline completes successfully without modifying Gold.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why not truncate and reload Gold every day?</b></span><br>
Incremental processing is faster, cheaper, and scales better.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: If one claim changes after six months, do you rebuild the whole table?</b></span><br>
No. Only the changed claim is processed through incremental MERGE.</p>
</div>
                
                `,
                children: [],
            },
            {
                q: `Data Modeling`,
                a: `
<div>

<p><span style="color:#1565C0;"><b>Q: What is dimensional modeling?</b></span><br>
Dimensional modeling organizes data into fact and dimension tables to simplify analytics and improve query performance.</p>

<p><span style="color:#1565C0;"><b>Q: What is a fact table?</b></span><br>
A fact table stores measurable business events, such as healthcare claims, along with foreign keys to related dimensions.</p>

<p><span style="color:#1565C0;"><b>Q: What is a dimension table?</b></span><br>
A dimension table stores descriptive business attributes used to filter and analyze facts.</p>

<p><span style="color:#1565C0;"><b>Q: What is your main Gold fact table?</b></span><br>
Our primary fact table is Fact Claims, built from cleaned Silver claims and enriched with surrogate keys from business dimensions and reference data.</p>


<p><span style="color:#1565C0;"><b>Q: What is a Star Schema?</b></span><br>
A Star Schema has one central fact table connected directly to multiple denormalized dimension tables.</p>

<p><span style="color:#1565C0;"><b>Q: Why did you choose Star Schema?</b></span><br>
It reduces joins, improves query performance, and is easier for BI users to understand.</p>

<p><span style="color:#1565C0;"><b>Q: Why not Snowflake Schema?</b></span><br>
Snowflake reduces storage but increases joins and query complexity, making Star Schema better for analytics.</p>

<p><span style="color:#1565C0;"><b>Q: What is the grain of your Fact Claims table?</b></span><br>
One record represents one finalized claim.</p>

<p><span style="color:#1565C0;"><b>Q: What is a surrogate key?</b></span><br>
A surrogate key is a system-generated identifier used to support SCD Type 2 history and joins.</p>

<p><span style="color:#1565C0;"><b>Q: Why not use natural keys?</b></span><br>
Natural keys can change and cannot distinguish historical versions.</p>

<p><span style="color:#1565C0;"><b>Q: Why do facts store surrogate keys?</b></span><br>
They ensure facts reference the correct historical version of each dimension.</p>

<p><span style="color:#1565C0;"><b>Q: Can natural keys still exist?</b></span><br>
Yes. Natural keys remain for business identification, while surrogate keys are used for joins.</p>

<p><span style="color:#1565C0;"><b>Q: What is a conformed dimension?</b></span><br>
A conformed dimension is shared across multiple fact tables to provide consistent business definitions.</p>

<p><span style="color:#1565C0;"><b>Q: what happened to encounters?</b></span><br>
his reporting domain is claims-centric, so the primary Gold fact is Fact Claims; Encounter data is retained in Silver and can support future analytical facts if business reporting requires them.</p>


<p><span style="color:#D32F2F;"><b>Interview Trap: Why don't you normalize dimensions?</b></span><br>
Denormalized dimensions reduce joins and improve reporting performance.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why not use Claim ID as the primary key?</b></span><br>
Claim ID is the business key, while facts reference surrogate keys for historical dimensions.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: If a Provider changes specialty, do historical claims change?</b></span><br>
No. Historical facts continue referencing the older provider dimension version.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why keep both natural and surrogate keys?</b></span><br>
Natural keys identify the business entity, while surrogate keys identify each historical version.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Can two surrogate keys have the same Patient ID?</b></span><br>
Yes. Each surrogate key represents a different historical version of the same patient.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why not generate surrogate keys in Silver?</b></span><br>
Silver focuses on clean enterprise data. Surrogate keys and SCD2 belong in Gold where dimensional history is maintained.</p>

</div>
                `,
                children: [],
            },
            {
                q: `-----SCD 2`,
                a: `
<div>
<p><span style="color:#1565C0;"><b>Q: How SCD2 works?</b></span><br>
We implemented SCD Type 2 in the Gold layer using Delta Lake MERGE on business key and active flag. If a match is found and tracked columns change, we expire the existing record by setting is_active = false and updating end_date. New records are inserted directly. <br>
For changed records, we insert a new active version in a second step by identifying records closed in the current run, ensuring full history with continuous business key.<br>


<pre><code class="language-sql">
-- ------------------------------------------------------------------
-- Step 1 — Create incoming view with temp staging
-- ------------------------------------------------------------------
-- ------------------------------------------------------------------
-- Step 2 — MERGE to close changed records
-- ------------------------------------------------------------------

MERGE INTO gold.dim_patient AS tgt
USING incoming AS src
ON tgt.patient_id = src.patient_id -- Business Keys
AND tgt.is_active = true

-- Match found + at least one tracked column changed → close it
WHEN MATCHED AND (
    tgt.name           <> src.name           OR
    tgt.dob            <> src.dob            OR ........
)
THEN UPDATE SET
    tgt.is_active  = false,
    tgt.end_date   = current_date(),
    tgt.updated_at = current_timestamp()

-- No match → brand new record, straight insert
WHEN NOT MATCHED THEN INSERT (
    patient_id,
    name,
    start_date,
    end_date,
    is_active,
    updated_at
)
VALUES (
    src.patient_id,
    src.name,
    current_date(),
    NULL,
    true,
    current_timestamp()
);
-- ------------------------------------------------------------------
-- Step 3 — Insert new version for records that were just closed
-- ------------------------------------------------------------------

INSERT INTO gold.dim_patient (
    patient_id,
    start_date,
    end_date,
    is_active,
    updated_at
)
SELECT
    src.patient_id,
    current_date()      AS start_date,
    NULL                AS end_date,
    true                AS is_active,
    current_timestamp() AS updated_at
FROM incoming src
INNER JOIN gold.dim_patient tgt
    ON  tgt.patient_id = src.patient_id
    AND tgt.is_active  = false
    AND tgt.end_date   = current_date();  -- only rows closed in THIS run


</code></pre> </p>


<p><span style="color:#1565C0;"><b>Q: What is SCD Type 2?</b></span><br>
SCD Type 2 preserves complete history by inserting a new dimension version instead of overwriting the existing record.</p>

<p><span style="color:#1565C0;"><b>Q: Why do you use SCD Type 2?</b></span><br>
It enables accurate historical reporting by preserving attribute values as they existed when business events occurred.</p>

<p><span style="color:#1565C0;"><b>Q: Which tables use SCD Type 2?</b></span><br>
Business dimensions such as Patient and Provider use SCD Type 2 because their descriptive attributes can change over time.</p>

<p><span style="color:#1565C0;"><b>Q: Why only dimensions?</b></span><br>
Facts store business events, while dimensions contain descriptive attributes that change over time.</p>

<p><span style="color:#1565C0;"><b>Q: Why not SCD Type 1?</b></span><br>
SCD1 overwrites previous values and loses history. SCD2 preserves historical versions.</p>

<p><span style="color:#1565C0;"><b>Q: How do you detect changes?</b></span><br>
Tracked business attributes from Silver are compared with the current active dimension record. Only business attribute changes create new versions.</p>

<p><span style="color:#1565C0;"><b>Q: Which columns are compared?</b></span><br>
Only tracked business attributes. Audit and technical metadata are excluded.</p>

<p><span style="color:#1565C0;"><b>Q: What happens when a change is detected?</b></span><br>
The current record is expired and a new version with a new surrogate key is inserted.</p>

<p><span style="color:#1565C0;"><b>Q: Which columns maintain history?</b></span><br>
Effective Date, Expiry Date, Current Flag, surrogate key, and business key.</p>

<p><span style="color:#1565C0;"><b>Q: What is Effective Date?</b></span><br>
The date from which a dimension version becomes valid.</p>

<p><span style="color:#1565C0;"><b>Q: What is Expiry Date?</b></span><br>
The date when that version stops being valid. Active records use a future placeholder date.</p>

<p><span style="color:#1565C0;"><b>Q: What is Current Flag?</b></span><br>
It identifies the currently active version of a dimension.</p>

<p><span style="color:#1565C0;"><b>Q: Why keep both Expiry Date and Current Flag?</b></span><br>
Current Flag simplifies current-state queries, while Effective and Expiry Dates support historical lookups.</p>

<p><span style="color:#1565C0;"><b>Q: What happens when there is no change?</b></span><br>
No update is performed, keeping the process idempotent.</p>

<p><span style="color:#1565C0;"><b>Q: How are surrogate keys generated?</b></span><br>
A new surrogate key is generated only for newly inserted historical versions.</p>

<p><span style="color:#1565C0;"><b>Q: What if multiple attributes change together?</b></span><br>
A single new SCD2 version is created containing all changed attributes.</p>

<p><span style="color:#1565C0;"><b>Q: What if multiple updates happen on the same day?</b></span><br>
Each business change creates a new version, distinguished using effective timestamps.</p>

<p><span style="color:#1565C0;"><b>Q: How do facts reference the correct dimension version?</b></span><br>
Facts join to the appropriate active or time-valid dimension record and store its surrogate key.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why doesn't SCD2 create duplicate records?</b></span><br>
Only tracked business attribute changes create new versions.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why not update the existing row?</b></span><br>
Updating would overwrite history and produce incorrect historical reporting.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Should historical claims show a patient's new address?</b></span><br>
No. Historical claims continue referencing the older patient dimension version.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Can two active records exist for the same patient?</b></span><br>
No. Only one record can be active for a business key.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why not compare every column?</b></span><br>
Technical metadata changes should not generate historical versions.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: If only last_updated_timestamp changes, do you create a new version?</b></span><br>
No. Technical metadata changes alone are ignored.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Does every change require a new surrogate key?</b></span><br>
Only tracked business attribute changes create a new surrogate key.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why is SCD2 implemented in Gold instead of Silver?</b></span><br>
Silver stores the latest trusted data, while Gold owns historical business modeling for analytics.</p>

</div>

                
                `,
                children: [],
            },
            {
                q: `Fact Table`,
                a: `
<div>

<p><span style="color:#1565C0;"><b>Q: What is your Gold fact table?</b></span><br>
Our primary Gold fact table is Fact Claims, built from the cleaned cumulative Silver claims table and enriched with business dimensions and reference data.</p>

<p><span style="color:#1565C0;"><b>Q: Why did you choose Claims as the fact table?</b></span><br>
Claims represent the primary business transaction for financial and operational reporting in our healthcare analytics platform.</p>

<p><span style="color:#1565C0;"><b>Q:Walk me through how a claim reaches the Gold Fact table.?</b></span><br>
The Gold pipeline reads only the changed incremental claims from Silver using the last successful processing watermark. Each claim is enriched by resolving Patient and Provider surrogate keys through SCD2 lookups, joined with reference data such as ICD-10, CPT, Fee Schedule, and Provider Roster, and then MERGEd into the Gold Fact Claims table.</p>

<p><span style="color:#1565C0;"><b>Q: What measures are stored in the fact table?</b></span><br>
The fact table stores measures such as billed amount, allowed amount, paid amount, and claim count.</p>

<p><span style="color:#1565C0;"><b>Q: What are foreign keys in the fact table?</b></span><br>
The fact table stores surrogate keys referencing business dimensions like Patient and Provider.</p>

<p><span style="color:#1565C0;"><b>Q: How do you populate Surrogate keys?</b></span><br>
The lookup matches the business key and ensures the claim's business date falls between the dimension's Effective Date and Expiry Date, returning the correct historical surrogate key.</p>

<p><span style="color:#1565C0;"><b>Q: Why use surrogate keys instead of natural keys?</b></span><br>
Surrogate keys ensure facts reference the correct historical dimension version.</p>

<p><span style="color:#1565C0;"><b>Q: What is an Unknown dimension?</b></span><br>
A predefined dimension record representing missing lookup values, typically with a fixed surrogate key.</p>

<p><span style="color:#1565C0;"><b>Q: Why not reject the fact?</b></span><br>
Loading the fact with an Unknown dimension preserves business events while allowing later correction.</p>

<p><span style="color:#1565C0;"><b>Q: What joins are used to build the fact table?</b></span><br>
Silver claims are joined with dimensions and reference datasets before loading Gold.</p>

<p><span style="color:#1565C0;"><b>Q: What reference data is used?</b></span><br>
ICD-10, CPT, Fee Schedule, and Provider Roster enrich claims with standardized business information.</p>

<p><span style="color:#1565C0;"><b>Q: Is the fact table updated or inserted?</b></span><br>
Delta MERGE inserts new claims and updates changed claims incrementally.</p>

<p><span style="color:#1565C0;"><b>Q: Why use MERGE instead of full reload?</b></span><br>
MERGE processes only changed claims, reducing compute cost and improving scalability.</p>

<p><span style="color:#1565C0;"><b>Q: Can facts be deleted?</b></span><br>
Normally no. Deletes occur only for validated source corrections.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why use an Unknown dimension instead of NULL?</b></span><br>
Unknown dimensions preserve referential integrity and simplify downstream reporting.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: What if Patient is missing but Provider exists?</b></span><br>
The claim is loaded with the Unknown Patient key while using the matched Provider key.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Can one fact row reference multiple versions of the same patient?</b></span><br>
No. Each fact references one surrogate key representing the correct historical version.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Can measures change after loading?</b></span><br>
Yes. Corrected source data is applied through incremental MERGE operations.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why isn't Claim ID the foreign key?</b></span><br>
Claim ID identifies the fact, while foreign keys reference related business dimensions.</p>

<p><span style="color:#D32F2F;"><b>Code for claims</b></span><br>
<pre><code class="language-sql">
SELECT
    c.claim_id,
    p.patient_sk,
    pr.provider_sk
FROM silver_claim c

JOIN dim_patient p
ON c.patient_id = p.patient_id
AND c.claim_date BETWEEN p.effective_date
                     AND p.expiry_date

JOIN dim_provider pr
ON c.provider_id = pr.provider_id
AND c.claim_date BETWEEN pr.effective_date
                      AND pr.expiry_date;</pre></code>
</p>



</div>

                `,
                children: [],
            },
            {
                q: `Business Transformations`,
                a: `
<div>
<p><span style="color:#1565C0;"><b>Q: What business transformations happen in Gold?</b></span><br>
Claims are enriched with Patient and Provider dimensions, and reference datasets like ICD-10, CPT, Fee Schedule, and Provider Roster.</p>

<p><span style="color:#1565C0;"><b>Q: Why aren't these transformations done in Silver?</b></span><br>
Silver provides clean enterprise data, while Gold applies business-specific modeling for analytics.</p>

<p><span style="color:#1565C0;"><b>Q: Why do you enrich claims?</b></span><br>
Dimensions and reference data provide business context required for reporting.</p>

<p><span style="color:#1565C0;"><b>Q: Which tables are joined?</b></span><br>
Fact Claims is joined with Patient and Provider dimensions and relevant reference datasets.</p>

<p><span style="color:#1565C0;"><b>Q: Why use reference data?</b></span><br>
Reference data standardizes business values and enriches reporting.</p>

<p><span style="color:#1565C0;"><b>Q: How are dimension lookups performed?</b></span><br>
Facts join to dimensions using business keys and store the matching surrogate keys.</p>

<p><span style="color:#1565C0;"><b>Q: What if a lookup fails?</b></span><br>
The fact is loaded using the Unknown dimension record, and the issue is logged.</p>

<p><span style="color:#1565C0;"><b>Q: What derived columns do you create?</b></span><br>
expected_reimbursement, actual_reimbursement, reimbursement_gap, ar_in_days, ar_bucket</p>

<p><span style="color:#D32F2F;"><b>Q: Do you perform aggregations in Gold?</b></span><br>
In our project, Gold primarily exposes detailed business-ready fact tables. We don't build pre-aggregated summary tables because the BI team owns dashboard-specific aggregations and KPI definitions.

<p><span style="color:#1565C0;"><b>Q: Who defines KPIs?</b></span><br>
The BI team defines KPIs using the standardized Gold datasets.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why not join everything in BI?</b></span><br>
Gold provides consistent joins and business logic, improving performance and reducing duplication.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: If ICD-10 descriptions change, do you rebuild the fact table?</b></span><br>
No. The reference dataset is refreshed, and only affected records are reprocessed if required.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: What if reference datasets conflict?</b></span><br>
The approved authoritative source is used according to business rules.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Can Gold contain business rules?</b></span><br>
Yes. Reusable business logic belongs in Gold, while report-specific KPIs remain in BI.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why separate business transformations from KPI calculations?</b></span><br>
Gold builds reusable datasets, while KPI definitions are owned by the BI team.</p>

</div>

                `,
                children: [],
            },
            {
                q: `Performance & Optimizations`,
                a: `
<div>

<p><span style="color:#1565C0;"><b>Q: How did you optimize your Gold layer?</b></span><br>
We optimized frequently queried Gold tables using OPTIMIZE, Z-ORDER, proper partitioning, and efficient join strategies.</p>

<p><span style="color:#1565C0;"><b>Q: Why does Gold need more optimization than Silver?</b></span><br>
Gold is optimized for analytical reads, while Silver is optimized for ETL processing.</p>

<p><span style="color:#1565C0;"><b>Q: Which tables did you optimize?</b></span><br>
Primarily the frequently queried Gold fact tables, with dimensions optimized only when beneficial.</p>

<p><span style="color:#1565C0;"><b>Q: Did you partition Gold tables?</b></span><br>
Yes. Large fact tables were partitioned on appropriate low-cardinality business columns.</p>

<p><span style="color:#D32F2F;"><b>Q: Why not partition every column?</b></span><br>
High-cardinality partitions create many small files and hurt performance.</p>

<p><span style="color:#1565C0;"><b>Q: Which columns do you Z-ORDER?</b></span><br>
Frequently filtered columns such as Claim ID, Patient ID, Provider ID, or service date based on query patterns.</p>

<p><span style="color:#1565C0;"><b>Q: Why not Z-ORDER every column?</b></span><br>
It increases maintenance cost with little additional benefit.</p>

<p><span style="color:#1565C0;"><b>Q: Why is file compaction important?</b></span><br>
It reduces metadata overhead and improves query performance.</p>

<p><span style="color:#D32F2F;"><b>Q: Why not run OPTIMIZE/Z-ORDER after every load?</b></span><br>
OPTIMIZE is compute-intensive, so we run it periodically as scheduled maintenance.</p>

<p><span style="color:#1565C0;"><b>Q: Did you cache Gold tables?</b></span><br>
Yes. We cached only repeatedly reused datasets during pipeline execution.</p>

<p><span style="color:#1565C0;"><b>Q: Why not cache everything?</b></span><br>
Caching consumes memory and benefits only repeatedly accessed datasets.</p>

<p><span style="color:#1565C0;"><b>Q: How did you optimize joins?</b></span><br>
We used broadcast joins for small dimensions and reference tables where appropriate.</p>

<p><span style="color:#1565C0;"><b>Q: When do you use Broadcast Join?</b></span><br>
When the smaller table comfortably fits in executor memory.</p>

<p><span style="color:#1565C0;"><b>Q: Why not broadcast every dimension?</b></span><br>
Large broadcast tables increase memory usage and may reduce performance.</p>

<p><span style="color:#1565C0;"><b>Q: What causes shuffle?</b></span><br>
Joins, aggregations, and repartitioning move data across executors.</p>

<p><span style="color:#1565C0;"><b>Q: How do you reduce shuffle?</b></span><br>
By using broadcast joins, efficient partitioning, and avoiding unnecessary repartitioning.</p>

<p><span style="color:#1565C0;"><b>Q: How did you achieve the 40–45% performance improvement?</b></span><br>
Through partition pruning, OPTIMIZE, Z-ORDER, selective caching, and optimized join strategies.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why not partition by Patient ID?</b></span><br>
High-cardinality partitioning creates excessive small files.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Can excessive partitioning reduce performance?</b></span><br>
Yes. It creates excessive metadata and many small files.</p>

<p><span style="color:#D32F2F;"><b>How often optimize?</b></span><br>
We scheduled OPTIMIZE periodically based on table growth and query performance. In our environment, a roughly biweekly schedule provided a good balance between query performance and compute cost.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why schedule OPTIMIZE separately?</b></span><br>
It keeps ingestion predictable and performs maintenance during low-usage periods.</p>

</div>

                `,
                children: [],
            },
            {
                q: `Data Quality`,
                a: `
<div>

<p><span style="color:#1565C0;"><b>Q: What data quality checks do you perform in Gold?</b></span><br>
Gold validates referential integrity, dimension lookups, SCD consistency, duplicate prevention</p>

<p><span style="color:#1565C0;"><b>Q: How do you validate referential integrity?</b></span><br>
Every fact foreign key must reference a valid dimension surrogate key or the predefined Unknown dimension.</p>

<p><span style="color:#1565C0;"><b>Q: How do you validate fact records?</b></span><br>
Mandatory business keys, successful dimension lookups, numeric measures, and duplicate business events are validated.</p>

<p><span style="color:#1565C0;"><b>Q: How do you validate dimensions?</b></span><br>
We ensure one active SCD2 record per business key and validate Effective Date, Expiry Date, and Current Flag consistency.</p>

<p><span style="color:#1565C0;"><b>Q: How do you prevent duplicate facts?</b></span><br>
Incremental MERGE uses the business key to prevent duplicate claim records.</p>

<p><span style="color:#1565C0;"><b>Q: How do you prevent duplicate SCD2 versions?</b></span><br>
New versions are created only when tracked business attributes change.</p>

<p><span style="color:#1565C0;"><b>Q: What business validations do you perform?</b></span><br>
We validate patient/provider references, required measures, and SCD history consistency.</p>

<p><span style="color:#1565C0;"><b>Q: How do you monitor data quality?</b></span><br>
Pipeline logs, audit metrics, and validation failures are monitored.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: If Silver is clean, why can Gold still fail?</b></span><br>
Business-level validations such as dimension lookups and SCD processing occur only in Gold.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: What audit columns do you maintain in Gold?</b></span><br>
We maintain load timestamp and pipeline execution metadata for lineage and troubleshooting.</p>

</div>

                `,
                children: [],
            },
            {
                q: `Failure Handling`,
                a: `
<div>

<p><span style="color:#1565C0;"><b>Q: How do you monitor your Gold pipelines?</b></span><br>
Gold pipelines are orchestrated using Databricks Workflows, where job status, logs, and failures are monitored.</p>

<p><span style="color:#1565C0;"><b>Q: What happens if a Gold pipeline fails?</b></span><br>
The failure is investigated using workflow logs, the issue is fixed, and the incremental job is rerun.</p>

<p><span style="color:#1565C0;"><b>Q: What if a dimension load fails before the fact load?</b></span><br>
Fact loading does not begin because dimensions must complete successfully first.</p>

<p><span style="color:#1565C0;"><b>Q: What if the fact load fails after dimensions complete?</b></span><br>
Since dimensions and facts are separate workflow tasks, successfully completed dimensions are not reprocessed. After resolving the issue, we rerun only the failed fact task, which safely resumes because the fact load uses idempotent MERGE operations</p>

<p><span style="color:#1565C0;"><b>Q: How do you investigate failures?</b></span><br>
We review Databricks Workflow logs, Spark logs, pipeline metrics, and audit metadata.</p>

<p><span style="color:#1565C0;"><b>Q: What audit information do you maintain?</b></span><br>
We maintain load timestamp and pipeline execution metadata for lineage and troubleshooting.</p>

<p><span style="color:#1565C0;"><b>Q: How does Delta Time Travel help?</b></span><br>
It allows us to inspect previous table versions for investigation and validation.</p>

<p><span style="color:#1565C0;"><b>Q: Do you use Time Travel for recovery?</b></span><br>
Primarily for investigation and validation. Restoration is performed only when required.</p>

<p><span style="color:#1565C0;"><b>Q: What happens if only part of the pipeline succeeds?</b></span><br>
Only incomplete stages are rerun, while successful stages are retained.</p>

<p><span style="color:#1565C0;"><b>Q: How do you avoid duplicate data after recovery?</b></span><br>
MERGE uses deterministic business keys to prevent duplicate records.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why not truncate the table before rerunning?</b></span><br>
Incremental recovery is faster, safer, and avoids unnecessary processing.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Can Time Travel replace backups?</b></span><br>
No. Time Travel supports short-term investigation and recovery, not long-term backup.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: How long can you use Time Travel?</b></span><br>
It is available only within the configured Delta retention period.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: What if OPTIMIZE was run before the failure?</b></span><br>
OPTIMIZE changes file layout but not logical data, so reruns are unaffected.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why keep audit columns?</b></span><br>
Audit metadata supports troubleshooting, lineage, reconciliation, and pipeline traceability.</p>

</div>

                `,
                children: [],
            },
            {
                q: `Production Design Decisions`,
                a: `
<div>

<p><span style="color:#1565C0;"><b>Q: Why does Gold use the latest state from Silver?</b></span><br>
Silver maintains the latest trusted enterprise data, allowing Gold to focus on business modeling.</p>

<p><span style="color:#1565C0;"><b>Q: Why is SCD Type 2 implemented in Gold instead of Silver?</b></span><br>
SCD2 is an analytical requirement, so history is maintained only in Gold while Silver remains the clean integration layer.</p>

<p><span style="color:#1565C0;"><b>Q: Why are surrogate keys generated only in Gold?</b></span><br>
"In our project, surrogate keys are generated in Gold because that's where we implement SCD Type 2 dimensions. Some organizations generate surrogate keys earlier, but our architecture keeps Silver focused on clean, current-state enterprise data and Gold focused on business modeling..</p>

<p><span style="color:#1565C0;"><b>Q: Why is Gold optimized differently from Silver?</b></span><br>
Silver is optimized for ETL, while Gold is optimized for analytical queries.</p>

<p><span style="color:#1565C0;"><b>Q: Why use a Star Schema?</b></span><br>
It reduces joins and improves reporting performance.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why not keep only facts?</b></span><br>
Dimensions describe entities and facts store measurable business events.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Why not keep every historical version everywhere?</b></span><br>
Keeping history only where it provides business value reduces complexity and improves maintainability.</p>

</div>
                
                `,
                children: [],
            },
            {
                q: `Advanced Interview Scenarios`,
                a: `
<div>

<p><span style="color:#1565C0;"><b>Q: What is a late-arriving fact?</b></span><br>
A late-arriving fact is a business event that reaches the data platform after its actual business date.</p>

<p><span style="color:#1565C0;"><b>Q: How do you handle late-arriving facts?</b></span><br>
The fact is processed during the next incremental load and linked to the appropriate dimension version using the business effective date.</p>

<p><span style="color:#1565C0;"><b>Q: What is a late-arriving dimension?</b></span><br>
A dimension record arrives after related facts have already been processed.</p>

<p><span style="color:#1565C0;"><b>Q: How do you handle late-arriving dimensions?</b></span><br>
Facts initially reference the Unknown dimension. After the dimension arrives, affected facts are reprocessed to resolve the correct surrogate key.</p>

<p><span style="color:#1565C0;"><b>Q: What if a provider record is corrected after several months?</b></span><br>
A new SCD2 version is created. Historical facts continue referencing the original version, while future facts use the new version.</p>

<p><span style="color:#1565C0;"><b>Q: What if historical business data is corrected?</b></span><br>
Only the affected historical records are backfilled instead of rebuilding the full Gold layer.</p>

<p><span style="color:#1565C0;"><b>Q: How do you handle dimension reprocessing?</b></span><br>
Only impacted dimensions and affected facts are reprocessed.</p>

<p><span style="color:#1565C0;"><b>Q: What if a reference dataset changes?</b></span><br>
The updated reference data is loaded, and affected Gold records are selectively reprocessed if required.</p>

<p><span style="color:#1565C0;"><b>Q: How does your pipeline scale?</b></span><br>
Incremental processing, optimized Delta tables, partition pruning, broadcast joins, and scheduled maintenance support scalability.</p>

<p><span style="color:#1565C0;"><b>Q: What is the biggest production challenge in Gold?</b></span><br>
Maintaining historical accuracy while keeping incremental processing efficient and reliable.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: A patient record arrives after the claim. What happens?</b></span><br>
The claim initially references the Unknown Patient dimension and is later updated with the correct surrogate key.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Should historical claims change when a provider changes specialty?</b></span><br>
No. Historical claims continue referencing the older provider dimension version.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: Gold row count is lower than Silver. What do you check first?</b></span><br>
I check reconciliation results, MERGE logic, business validations, and dimension lookups before investigating source data.</p>

<p><span style="color:#D32F2F;"><b>Interview Trap: BI reports incorrect numbers. Where do you start?</b></span><br>
I validate Gold against Silver, review recent pipeline runs, and determine whether the issue is in the data platform or the BI layer.</p>

</div>

                `,
                children: [],
            },
            {
                q: `did you work with stakeholders on KPI definitions? `,
                a: `<ul><li>I wasn't directly involved in defining the KPIs with business stakeholders. Those business rules  were typically finalized by the product owner, business analysts, and reporting teams</li><li>I attended requirement clarification and sprint discussions where business requirements and schema changes were discussed </li> <li> My responsibility was understanding those requirements, implementing the data transformations, and ensuring the Gold tables accurately supported those reporting needs.</li></ul>`,
                children: [
                    {
                        q: `How did you know what to implement?`,
                        a: `<li>We received functional requirements and mapping documents from the business analysts, which defined the required fields, business rules, and expected outputs.</li><li> We discussed any ambiguities during requirement clarification or sprint meetings.</li><li> We also referred to existing reports and sample outputs to validate that our transformations matched downstream reporting expectations.`,
                        children: [],
                    }
                ],
            }

        ],
    }

    ,

    ////////////////////////////////////////////////////////////////
    {
        cat: " Scenario Based",
        q: `Your 40-45% optimizaton story / Biggest technical achievement so far`,
        answer: `
<code> Acheivement:</code> Reduced Gold layer pipeline runtime by 40–45% through Spark and Delta Lake optimizations — broadcast hints for small reference tables, OPTIMIZE for file compaction, and Z-ORDER to improve MERGE performance <hr> <br>
<code>Contribution</code> One of my biggest contributions was optimizing long-running Gold layer jobs. <li>I diagnosed bottlenecks using Spark UI and implemented broadcast hints for small reference tables, Z-ORDER for faster MERGEs, and OPTIMIZE for file compaction — bringing runtime down by 40–45%.</li><li> That directly improved data availability for downstream analytics and reporting teams.</li> <hr> <br>
<code>Challenges:</code> One significant challenge was Gold layer performance — it's where all the heavy lifting happens, SCD Type 2 MERGEs on dimension tables and upserts on fact tables.
<br><hr>
Initially, the Gold layer jobs were running for 50-55 mins and sometimes taking much longer than expected. I opened the Spark UI and started analyzing the execution plans. 
<br> <span style="color: #0078D4;"><b >I Found 3 root causes: </b></span>
<ul>
<li>First — <span style="color: #0ae71c;"><b>MERGEs</b></span> were doing full table scans. Without Z-ORDER, Delta had no way to skip irrelevant files when looking for matching keys. I applied Z-ORDER on the MERGE join columns — that physically clusters matching rows, Delta's data skipping kicks in, and file reads drop significantly. <li>
<li>Second — daily MERGEs were accumulating small files over time. Aggregation queries were opening hundreds of small files instead of a few large ones . Periodic <span style="color: #0ae71c;"><b>OPTIMIZE</b></span>  compacted them and reduced the file count Spark had to scan which improved the <b>schedular Efficiency</b>  </li>
<li> Third — and most impactful — multiple joins between fact and dimension tables were all going through SortMerge, causing heavy shuffle. I checked table sizes in Spark UI and found one reference dimension was around 20 MB — just above the <b>default 10 MB auto-broadcast threshold</b>, so Spark wasn't picking it up automatically. I added an explicit <span style="color: #0ae71c;"><b>Broadcast HINT</b></span> , which eliminated the shuffle entirely — that table got sent to every executor once and the join happened locally. Immediately visible in the execution plan." </li>
<li>The combination of these three — Z-ORDER for data skipping on MERGEs, OPTIMIZE for file compaction , and broadcast hint for the small dimension table joins — brought down the overall Gold layer runtime to 35-40 mins there by reducing the runtime by 40–45% </li>
</li>
<pre><code class="language-sql">
result_df = df_large.join(
    broadcast(df_small),
    on="id",
    how="inner"
) -- Daily in code

OPTIMIZE sales_data ZORDER BY (customer_id,client_id)  -- weekly once
VACUUM sales_data RETAIN 168 HOURS -- scheduled separately with appropriate retention to clean up obsolete files without affecting time travel.
</code></pre>

`,
tip:`Contributions = what you actively did/built <br>
Achievements = the measurable outcome/impact of what you did`,
        children: [],
    },

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// new 

    {
        cat: " Scenario Based",
        q: `Challenges faced and overcome`,
        answer: `<li> One challenge we faced was schema changes from the Upstream PostgreSQL source, like new columns being added without notice, which used to break our Bronze-to-Silver pipelines.. Since Bronze was stored in Parquet, these columns were ingested without failure but led to schema drift. In Silver, we explicitly select required columns instead of using select *, so pipelines remain stable. We also detect new columns by comparing schemas during ingestion and trigger alert notifications, allowing us to review and onboard them in a controlled manner.</li>
<li>While reading Excel files from Unity Catalog Volumes, Spark initially threw a File Not Found error. After validating the path and volume access permissions, I realized the issue was actually due to Spark not having a native Excel reader.<br>

By default, Spark supports formats like Parquet, CSV, and JSON, but not Excel. So even though the file existed, Spark couldn't interpret it correctly. <br>

To resolve this, I added the external library com.crealytics:spark-excel_2.12:0.13.5 to the cluster. After that, I was able to successfully read the file using the custom format.</li>`,
        children: [],
    },

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// new 

    {
        cat: "Technical depth",
        q: "What Azure and Databricks tools do you use daily?",
        answer: `"Day to day: Databricks for compute and notebook-based pipeline development, PySpark for distributed transformations, Delta Lake for the storage layer, ADLS Gen2 for raw and processed data storage, and Azure Data Factory for orchestration and triggering pipelines. Git for version control across the team. I use SQL heavily inside Databricks for the Gold-layer aggregations."`, children: []

    },

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// new 

    {
        cat: "Mindset & growth",
        q: "What are you looking to learn or work on next?",
        answer: `"I want to go deeper on real-time streaming — I've only worked in batch so far and I want to get hands-on with Spark Structured Streaming or Delta Live Tables. I'm also interested in data quality frameworks and working closer to the platform side — infrastructure-as-code, cluster tuning at a deeper level. And eventually data architecture ownership — not just building pipelines but designing the systems they run on."`,
        children: []
    }
];
