const cats = ["Architecture","All","Story & fit","Technical depth","Salary & logistics","Mindset & growth","Project"];
const qs = [
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// new 
	{
		cat:"Story & fit",
		q:"Relted links",
		answer:`<p>  <a href="https://undefeatable171.github.io/int-prep/healthcare-notes.html" target="_blank" class="link">
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
		children:[],
	},
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
{
    cat:"Story & fit",
    q:"Tell me about yourself.",
     answer:`Hi, I'm Prathap. I'm currently working as an Azure Data Engineer at TCS with around 3 years of experience. I primarily work on a US healthcare project, building scalable batch ETL pipelines using Azure Databricks, PySpark, Python, and SQL. I hold both the Databricks Certified Data Engineer Associate and Professional certifications, and coming to academics,  I have completed my graduaction in Electronics and Communication Engineering from VR Siddhartha Engineering College, Vijayawada.`,
              children:[
              {
                q:"Why ECE to Data Engineering?",
                a:"Although I studied ECE, I developed a strong interest in software during my college and started learning Python and SQL. That interest turned into hands-on experience in my current role with Databricks and PySpark, so I chose to build my career in data engineering",
                children:[]
              },
            ]
},


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// new 

 {
    cat:"Story & fit",
    q:"Why are you looking for a new role right now? / leaving TCS",
answer:`TCS has given me a strong foundation in building production-grade data pipelines on Azure Databricks and working with large-scale healthcare data.<br> I'm now looking for an opportunity where I can take on broader responsibilities, work on more complex data engineering problems, and contribute to the design and development of scalable data platforms. `
 ,
children:[
    {
        q:"what optimizations",
        a:"👉 In our pipelines, I mainly worked on reducing job runtime . For example, one of our joins between large claim tables was causing heavy shuffle. I optimized it using broadcast join for smaller dimension tables and repartitioned data based on join keys. This reduced runtime by around 30–40%.",
       children: [
                       {
                            q:`how you identifiedbottle necks`,
                            a:`“I identified the bottleneck using Spark UI — stages with high shuffle read and skewed tasks."`,
                            children:[]
                       },
               ],
    } ,
    {
        q:`what design decisions are you ref to`,
        a:`👉“Primarily around structuring pipelines — deciding how to split transformations across bronze, silver, and gold, choosing incremental vs full loads, and partitioning strategies for large tables.”
            👉 If pushed:“For example, for frequently updated healthcare claims data, we used incremental loads with merge instead of full refresh to reduce processing time.”`,
        children:[],
    },
    {
        q:`what makes systems scabale`,
        a:`Scalability depends on handling increasing data without performance degradation. In our case, we ensured scalability using partitioning on high-cardinality columns, incremental processing instead of full loads, and avoiding data skew during joins.`,
        children:[],
    },
    {
        q:`How do you ensure data quality?`,
        a:`In silver layer, we apply checks like removing duplicates, handling null values, and validating schema. We also compare record counts between source and target. For critical tables, we added validation queries to ensure consistency before loading into gold.`,
        children:[],
    },
    {
        q:`Handling large data volumes?`,
        a:`For large datasets, we use partitioning and avoid small file issues by optimizing file sizes. We also use Delta format for efficient reads and writes. During joins, we handle skew using repartitioning or broadcast where applicable`,
        children:[],
    },
    {
        q:`how do you handle failures`,
        a:`“We use retry mechanisms in our job orchestration. Also, since we use incremental loads with merge, pipelines are idempotent — rerunning doesn’t create duplicates. We also log failures and track them for debugging.”`,
        children:[],
    },
    {
        q:`How do you optimize cost in Databricks?`,
        a:`We optimized cost by using job clusters instead of all-purpose clusters, enabling auto-scaling, and avoiding unnecessary full data processing. Also, by optimizing queries and reducing shuffle, we reduced compute usage.`,
        children:[],
    },
    {
        q:`How do you ensure data quality?`,
        a:`yes`,
        children:[],
    }
   ] 
       
},
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// new 

{ cat:"Project",
q:`have you ever worked on any end-end data Frame work ?`,
answer:`"Yes, I've worked on an end-to-end data pipeline built on Azure Databricks. We follow Medallion architecture — starting from raw ingestion in Bronze, transformation and deduplication in Silver, and business-ready aggregations in Gold. The entire pipeline is orchestrated through Databricks Workflows, processing around 45–50 GB of healthcare data daily. From source to BI consumption — that's our end-to-end framework." `,
tip:`end-end data pipe line = end-end data framework `,
children:[{
q: `"Can you tell me more about the domains of the projects that you have worked with?"`,
a:`I have primarily worked in the Healthcare domain for a US-based client. The project deals with clinical and financial data.
. We receive data from multiple Source systems systems containing member information, provider details, claim transactions, diagnosis codes, and payment information.

My role is to build and maintain Databricks-based ETL pipelines that ingest data from PostgreSQL and file-based sources, transform it, and make it available for downstream reporting, analytics, and data science teams.<br>
https://prathap-chowdary.github.io/int-prep/healthcare-notes.html  ------ use this for healthcare notes`,
children:[
{
			q:`"You said healthcare claims. What are the top 5 datasets you process?"`,
			a:`The major datasets include member information, provider information, claim transaction data, visits , diagnosos and procedures etc,.`,
			children: [],
			},
{
q:`How HIpaa is followed`,
  a:`HIPAA compliance in our project is handled at multiple levels.
  <ul>
  <li>In our project, sensitive fields like SSN and home address are handled at the source level itself — data comes from the client's PostgreSQL system already tokenized  before landing in our pipeline.</li>
  <li>Business identifiers like MemberID, ClaimID, ProviderID, NDC codes are accessible as they're needed for ETL and joins — these are not considered hard PII under HIPAA.  Raw PII visibility is restricted to the client's compliance team — we don't interact with it at any layer of our Medallion pipeline.</li>
  <li>At the pipeline level, no PII fields are logged or printed in notebook outputs or job logs.</li>
  <li>Access is controlled through Azure AD groups synced into Databricks via SCIM — we follow the least privilege principle, each group gets exactly what their job needs.</li>
  <ul>`,
  children:[],

},
],
},],},
//////////////////////////////////
{
  cat:`Data sources`,
  q:`What data sources have you worked with?`,
  answer:`💠In my current healthcare project at TCS, I've primarily worked with relational databases and file-based sources. Our main source is a PostgreSQL database that stores operational healthcare data, and we also receive CSV and Excel files from external partners. These files are landed into ADLS Gen2 before processing.

<br> 💠 My responsibility was to build ingestion pipelines that could handle both database and file-based inputs efficiently. For database tables, we use incremental extraction based on a watermark maintained in a metadata table, while for files we perform schema validation before loading them into the Bronze layer.

<br> 💠 This approach helps us process around 45–50 GB of data daily while minimizing redundant data movement, and it integrates seamlessly with our Medallion architecture.`,
tip:`in general 2 Categories:<br> File-based Sources: Parquet , csv , excel.<br> Structured relational sources — databases like PostgreSQL, SQL Server, Oracle `,  
children:[],

},
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// new 

  {
    cat:"Project",
    q:"Walk me through your current project.",
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
tip:`Just say this , if asked then continue each layer details.`,
children:[
    {
        q:`detailed project flow`,
        a:`
        <span style="color: #0078D4;">Sources:</span><br>
        <p> We have two primary source types. <ol><li>The first is an on-premises PostgreSQL database containing six core operational tables: Patients, Providers, Encounters, Claims, Diagnoses, and Procedures.</li><li>

The second consists of file-based sources such as daily CSV files for Eligibility, Claims Adjudication, and Prior Authorization responses, along with periodic reference files like ICD-10, CPT, Fee Schedule, and Provider Roster.</li></ol></p>
        <span style="color: #0078D4;">Bronze:</span><br>
        <p> The Bronze layer is responsible for raw data ingestion. PostgreSQL data is ingested incrementally, while file-based sources are processed on their respective schedules.
The Bronze layer preserves raw source data in Parquet format, applying only minimal transformations like schema alignment and audit metadata.</p>
        <span style="color: #0078D4;">Silver:</span><br>
        <p>The Silver layer standardizes and cleans the data by applying data quality validations like null handling, datatype standardization, and deduplication. The cleaned data is then MERGED into cumulative Delta tables, while reference datasets are refreshed using full reload whenever new versions are received.</p>
        <span style="color: #0078D4;">Gold:</span><br>
        <p>The Gold layer is our business consumption layer, where we build business-ready dimension and fact tables. Dimension tables use SCD Type 2 wherever historical tracking is required, while fact tables are enriched with dimensions and reference data for downstream analytics.</p>
        <span style="color: #0078D4;">Downstream Consumption:</span><br>
        <p>The curated Gold tables are consumed by finance, operations, BI, and data science teams. Our responsibility is building and maintaining the data platform, while the BI team owns the reporting and KPI definitions</p>
        <span style="color: #0078D4;">Orchestration & Monitoring:</span><br>
        <p>he platform is orchestrated using Databricks Workflows, and we use Unity Catalog for centralized governance with fine-grained access control to protect PHI.</p>
          <span style="color: #0078D4;">Responsibility:</span><br>
          <p>My responsibilities include developing PySpark transformations, implementing incremental ETL pipelines, optimizing Spark jobs, resolving production issues.</p>
        `,
        children:[],
    },
{

	q:`High Level`,
	a:``,
	children:[
			{ q:`Why medallion `,
					a:` <ul>
  		<li>In our project, Medallion architecture helped solve data inconsistency and reprocessing issues from multiple sources (PostgreSQL + files).
    		<ul>
      			<li>Bronze stores raw data as-is from source→ so you always have a replayable source of truth if anything breaks downstream.</li>
      			<li>Silver ensures standardized, deduplicated datasets, avoiding repeated cleaning logic across teams</li>
      			<li>Gold provides business-ready, aggregated datasets, so BI and DS teams don’t implement their own transformations</li>
    		</ul>
  		</li><li>Without medallion, debugging and root-cause tracing were difficult, and reprocessing required repeatedly hitting source systems, increasing cost and risk.</li></ul>`,
			children:[],
			} ,
			{
				q:`what is medallion`,
				a:` <li>Medallion architecture is a layered data design pattern with three zones — Bronze, Silver, and Gold.</li>
					<li>Bronze is the raw landing layer where data is ingested as-is from source systems with minimal transformation. Silver is the cleansed and standardized layer where deduplication, null handling, and normalization happen. Gold is the business-ready layer where aggregations, dimensional models, and domain-specific logic live — this is what BI teams and data science teams consume directly. </li>
<li>The core idea is progressive data quality — each layer adds more structure and trust to the data </li>`,
				children:[],
			},
			

			{q:`Why Databricks for just 45–50 GB/day, not rdbms or Snowflake ingestion`,
			 a:` 👉Current volume is moderate, but we chose Databricks for scalability, complex transformations like SCD2, and Delta features like MERGE and time travel.
			It’s more about future growth and flexibility than just current size.<br>
			👉If migrated now : At current scale, a traditional system could work but slow due to scd2+ complex joins, but Databricks gives us better flexibility and future 				scalability. `,
			 children:[] ,
			},
			{
			q:`On premis sql - How pulling - What’s the failure handling mechanism?`,
			a:` <li> We ingest data from on-prem PostgreSQL using JDBC-based Spark reads via Databricks.</li>
				<li>We use partitioned JDBC reads (based on numeric columns like ID) to parallelize extraction and improve performance.If not used  everything 					through a single executor. </li>
				<li>We have retry logic (3 attempts) for transient failures like network issues.
				</li> <li>The pipelines are orchestrated via Databricks Workflows.</li> 
					<pre><code class="language-python">url = "jdbc:postgresql://host:port/db"
properties = {
    "user": "username",
    "password": "password",
    "driver": "org.postgresql.Driver"
}
query = "(SELECT * FROM schema.table WHERE updated_at > '2025-01-01') as t"
retries = 3
for i in range(retries):
    try:
        df = spark.read.jdbc(
            url=url,
            table=query,
            properties=properties
        ).option("partitionColumn", "id")
         .option("lowerBound", "1")
         .option("upperBound", "100000")
         .option("numPartitions", "8")
         .load()
 
        break
    except Exception as e:
        if i == retries - 1:
            raise e</code></pre>`,
			children:[],
			},
            
		],
},
///new

{
q:`Bronze Layer`,
	a:``,
	children:[
		{
		q:`How do you ensure atomicity between data load + watermark update? and how it loads`,
		a:`<li>Metadata table (stored as Delta) tracks last_processed_timestamp.</li><li>We update it only after successful data write to Bronze.</li><li>This ensures if pipeline fails mid-way, watermark is not updated → so data is reprocessed safely.</li>`,children:[],
},
		{
		q:`Why Parquet in Bronze, not Delta?`,
		a:`<li>Bronze is meant to store raw, immutable data, so we use Parquet to keep it simple and cost-efficient.
</li><li>We avoid Delta here since we don’t need updates or ACID — just raw ingestion.
</li><li>Delta is used from Silver onwards where we need MERGE, updates, and consistency.</li>`,children:[],
},
 

//////////////////////////

{ q:`Late arriving data`,
a:`<li>Currently, we rely on source data contracts, so we don’t have a dedicated late-data handling mechanism.</li>
	<li>I’m aware this is a limitation, since timestamp-based incremental loads can miss late-arriving records.</li>
	<li>A better approach would be implementing a lookback window or CDC-based ingestion to handle such scenarios more reliably.</li>`
,children:[
{q:`how look back windows are decided`,
	a:`<li>Lookback window is decided based on data arrival patterns and business SLAs.</li><li>We analyze how late data typically arrives (e.g., 1–2 days delay), and set the window 	slightly higher (like 2–3 days) to be safe.</li>`
,children:[],
},],},
//////////////////////////////////
{
                q:`Why run every 4 hours if CSV/Excel is daily?`,
                a:`"PostgreSQL is the real-time driver. Encounters, claims, and diagnoses update continuously — patients getting admitted, claims being submitted throughout the day. Finance needs claim visibility mid-day, not next morning. The 4-hour cadence is driven by PostgreSQL freshness. CSV and Excel are daily — the pipeline just checks each run, processes if new files are present, skips if not."`,
                children:[],
            },
{
    q:`if you know no files in csv/excel filders. why every run?`,
    a:`The 4-hour cadence is justified by PostgreSQL alone — that data changes continuously. For CSV and Excel, the pipeline does a lightweight file existence check on ADLS — if nothing is there, it skips in seconds. Running one unified pipeline every 4 hours is simpler to maintain and monitor than managing two separate schedules. Operational simplicity over over-engineering."`,
    children:[],
},
{
q:`Isn't Gold stale without the daily CSV?`,
a:`"That's acceptable by design. Payers batch-process adjudication overnight — there's no real-time adjudication feed available from them. So the morning CSV drop is the earliest that data exists anywhere. It's not a pipeline limitation — it matches upstream reality. PostgreSQL data is fresh every 4 hours. Adjudication results, lab results, denial worklists — those are next-morning by nature."`,
children:[],
},
],},

//new
{q:`Silver Layer`,
	a:``,
	children:[
		{
		q:`How do you handle schema changes from source?`,
		a:`Delta format gives us schema enforcement at write time, so unexpected schema changes fail loudly rather than silently corrupting Silver. We handle schema evolution explicitly when needed using mergeSchema.`,children:[],
		},
]
 },
///new
{q:`Gold Layer`,
	a:``,
	children:[{	
		q:`why upsert fact tables before aggregating?`,
		a:`Aggregating before upsert risks including stale or duplicate records in the summary. We upsert first so the fact table is in its correct final state, then aggregate — ensuring summary tables always reflect accurate numbers`,children:[],
},
{
q:`How does your SCD Type 2 MERGE work?`,
a:`We implemented SCD Type 2 in the Gold layer using Delta Lake MERGE on business key and active flag. If a match is found and tracked columns change, we expire the existing record by setting is_active = false and updating end_date. New records are inserted directly. <br>
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


</code></pre>`


,children:[],
},
{q:`why views only for BI`,a:`Views give us a decoupling layer between the Gold tables and BI consumers. If we restructure or rename anything in the underlying table, we just update the view — BI reports stay untouched and nothing breaks downstream`,children:[]},
{q:`what if the MERGE partially fails for fcts? Are your summary tables now inconsistent with facts`,a:`in case of a MERGE failure the aggregation part is skipped  — the agg task only triggers on success of the MERGE task. So summary tables retain yesterday's data intentionally, not silently. We'd also fire an alert so the BI team knows the data is T-1. Stale but consistent is better than partial aggregations on top of a half-written fact table.`,children:[]},
]

},
///new

{q:`🔥 Architecture & Reality Check`,
	a:``,
	children:[
{q:`why not ADF only dbx`, a:`Our sources — PostgreSQL via JDBC and CSV/Excel from ADLS — are natively handled in PySpark, so ADF added no value. Databricks Workflows already handles our orchestration, so bringing in ADF would've just split observability across two tools for zero gain`,children:[]
}
,
]
}
],
  },

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// new 
 {
    cat:"Architecture",
    q:"Arcitecture - Orchestration",
    answer:``,
    children:[
        {
            q:`why 4 hours cadence?`,
            a:`The cadence was decided based on business requirements and source data availability. <br> 💠 Since new operational data was generated throughout the day, a daily refresh would introduce unnecessary delay. <br> 💠 A 4-hour schedule provided multiple intraday updates while keeping compute costs and pipeline overhead reasonable.`,
            children:[
                {
                    q:`who decided 4 hours?`,
                    a:`The cadence was agreed between the business stakeholders and the data platform team based on reporting SLAs and source data availability. My responsibility was implementing and maintaining the pipelines to meet that SLA.`,
                    children:[],
                },
                {
                    q:`what business requirement drove 4 hours?`,
                    a:`The business requirement was that downstream reporting should be refreshed multiple times during the day instead of waiting for the next day's batch. Since new claims and encounter records were continuously generated, the reporting teams wanted relatively fresh data for operational reporting.`,
                    children:[],
                },
            ],
        },
        {
            q:`What if business later needs CSV data fresher than daily — how would you handle that?`,
            a:`We'd revisit the vendor relationship first — if they can send intraday files, we'd adjust the schedule to match. The pipeline's schedule is driven by actual source capability and business requirement, not hardcoded to a fixed assumption.`,
            children:[],
        },
        {
            q:`<span style='color:green'>Why does PostgreSQL refresh every 4 hours but CSV only daily — isn't that inconsistent?<br>
            So for those 5 out of 6 cycles, isn't your CSV-backed data stale?<br>
            Won't Gold contain stale CSV data?</span>`,
            a:` Technically Yes, but that's by design.Each source refreshes based on its own business need and its own delivery pattern. <br> 💠 The payer/clearinghouse doesn't have a real-time  feed; the earliest that data available is the next morning when their batch file drops. <br>💠 Our pipeline just reflects that reality — PostgreSQL refreshes every 4 hours because it can, CSV refreshes daily because that's the earliest the data exists at all. <br> 💠 Gold always uses the latest available data from each source.`, 
            children:[],
        },
    ],
 },
      
/////////////////////////////////
{
    cat:"Architecture",
    q:"Arcitecture -Source",
    answer:``,
    children:[
       
        {
            q:`what if CSV file is delayed?`,
            a:`Our PostgreSQL pipeline runs every 4 hours, but CSV files are vendor-delivered once a day, so we schedule their ingestion separately at a fixed cutoff time.<br> At the scheduled time, the pipeline checks whether the expected file is available. If it is, we process it. If it's missing, we record the status as SKIPPED_FILE_NOT_FOUND in our control table, generate an alert, and continue processing the remaining sources.<br> We don't wait for delayed files beyond cutoff time, because that would make downstream Silver and Gold processing unpredictable. Once the vendor delivers the file, it's picked up automatically in the next scheduled daily run.`,
            children:[
                {
                    q:`how do you decide the cutoff time?`,
                    a:`It's based on historical delivery patterns of the vendor — most of our files arrive via overnight batch from payers and clearinghouses, so by early morning they're reliably present.<br> 💠 We picked a cutoff with enough buffer for normal variance. If a vendor consistently misses that window, that's a conversation with them to either adjust our schedule or fix their delivery timing`,
                    children:[],

                },
                {
                    q:`what if the CSV file is delayed beyond cutoff?`,
                    a:``,
                    children:[],
                },

            ],
        },
        {
            q:`Why Parquet in Bronze?`,
            a:`Bronze is intended to preserve raw source data. Since we don't perform updates or MERGE operations there, Parquet keeps storage simple and lightweight. Delta features such as ACID transactions and MERGE become valuable from the Silver layer onwards.
            <br> <code>But we use Delta in our project ? </code><br>
            💠 That's a valid approach. Many organizations use Delta across all Medallion layers. In our project, the design decision was to keep Bronze lightweight and introduce Delta where transactional features became necessary.`,
            children:[],
        },
    ],
},
//////////////////////////////////////////////////////////////
{
    cat:" Architecture",
    q:"Arcitecture - Silver",
    answer:``,
    children:[],
},
//////////////////////////////////////////////////////////
{
    cat:" Architecture",
    q:"Arcitecture - Gold",
    answer:``,
    children:[
        {
            q:`did you work with stakeholders on KPI definitions? `,
            a:`<ul><li>I wasn't directly involved in defining the KPIs with business stakeholders. Those business rules  were typically finalized by the product owner, business analysts, and reporting teams</li><li>I attended requirement clarification and sprint discussions where business requirements and schema changes were discussed </li> <li> My responsibility was understanding those requirements, implementing the data transformations, and ensuring the Gold tables accurately supported those reporting needs.</li></ul>`,
            children:[
                {
                    q:`How did you know what to implement?`,
                    a:`<li>We received functional requirements and mapping documents from the business analysts, which defined the required fields, business rules, and expected outputs.</li><li> We discussed any ambiguities during requirement clarification or sprint meetings.</li><li> We also referred to existing reports and sample outputs to validate that our transformations matched downstream reporting expectations.`,
                    children:[],
                }
            ],
        }

    ],
}

,

////////////////////////////////////////////////////////////////
{
    cat:" Scenario Based",
   q:`Your 40-45% optimizaton story / Biggest technical achievement so far`,
answer:`<li> One of the significant challenges I faced was around pipeline performance in the Gold layer. Gold layer is where all the heavy lifting happens — SCD Type 2 MERGEs on dimension tables, upserts on fact tables, and aggregations for summary tables on top of that.
<li>Initially, the Gold layer jobs were running for 50-55 mins and sometimes taking much longer than expected. I opened the Spark UI and started analyzing the execution plans. A few things stood out.</li>
<li><ul>
<li>First, the MERGE operations on dimension and fact tables were doing full table scans — because without Z-ORDER, Delta had no way to skip irrelevant files when looking for matching keys. I applied Z-ORDER on the columns used in MERGE join conditions and common filter predicates, It clusters matching rows together physically, so MERGE reads far fewer files. Once that was in place, Delta's data skipping kicked in and the engine started skipping large portions of the table — MERGEs became significantly faster. </li>
<li>Second, since we run MERGE every day, each run was writing new small Delta files into the Gold tables. Over time this meant aggregation queries were opening hundreds of small files instead of a few large ones. I ran OPTIMIZE periodically to compact those files, which reduced the file count Spark had to open during aggregation scans considerably. </li>
<li>Third — and this is the one I found most impactful in the aggregation queries — we had multiple joins happening between the fact table and several dimension tables. Spark was doing SortMerge joins across all of them, which meant heavy shuffle stages. I went through each joining table and checked their sizes in the Spark UI. One of the reference dimension tables was around 20 MB — just above Spark's default auto-broadcast threshold of 10 MB, so it wasn't getting broadcasted automatically. I explicitly applied a broadcast hint on that table. That eliminated the shuffle stage for that join entirely — the small table was sent to every executor once and the join happened locally. The difference was immediately visible in the execution plan. </li></ul>
<li>The combination of these three — Z-ORDER for data skipping on MERGEs, OPTIMIZE for file compaction on aggregations, and broadcast hint for the small dimension table joins — brought down the overall Gold layer runtime by 40–45% </li>
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
children:[],
},

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// new 
 
{
    cat:" Scenario Based",
   q:`Challenges faced and overcome`,
answer:`<li> One challenge we faced was schema changes from the Upstream PostgreSQL source, like new columns being added without notice, which used to break our Bronze-to-Silver pipelines.. Since Bronze was stored in Parquet, these columns were ingested without failure but led to schema drift. In Silver, we explicitly select required columns instead of using select *, so pipelines remain stable. We also detect new columns by comparing schemas during ingestion and trigger alert notifications, allowing us to review and onboard them in a controlled manner.</li>
<li>While reading Excel files from Unity Catalog Volumes, Spark initially threw a File Not Found error. After validating the path and volume access permissions, I realized the issue was actually due to Spark not having a native Excel reader.<br>

By default, Spark supports formats like Parquet, CSV, and JSON, but not Excel. So even though the file existed, Spark couldn't interpret it correctly. <br>

To resolve this, I added the external library com.crealytics:spark-excel_2.12:0.13.5 to the cluster. After that, I was able to successfully read the file using the custom format.</li>`,
children:[],
},  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// new 

  {
    cat:"Technical depth",
    q:"What Azure and Databricks tools do you use daily?",
    answer:`"Day to day: Databricks for compute and notebook-based pipeline development, PySpark for distributed transformations, Delta Lake for the storage layer, ADLS Gen2 for raw and processed data storage, and Azure Data Factory for orchestration and triggering pipelines. Git for version control across the team. I use SQL heavily inside Databricks for the Gold-layer aggregations."`,children:[]
 
  },

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// new 

  {
    cat:"Mindset & growth",
    q:"What are you looking to learn or work on next?",
    answer:`"I want to go deeper on real-time streaming — I've only worked in batch so far and I want to get hands-on with Spark Structured Streaming or Delta Live Tables. I'm also interested in data quality frameworks and working closer to the platform side — infrastructure-as-code, cluster tuning at a deeper level. And eventually data architecture ownership — not just building pipelines but designing the systems they run on."`,
 children:[]  
  }
];
