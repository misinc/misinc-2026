# Cal.com copy — bio and event description

Copy these into Cal.com. Both are written to match the voice of the site, and
both are deliberately short: this text is read by someone who has already
decided to book and is now looking for a reason not to.

---

## Profile bio

Paste into **Cal.com → Settings → Profile → About**.

### Short version (recommended — fits the booking sidebar without truncating)

> MIS, Inc. is a boutique web design and development studio in Albuquerque, New
> Mexico. Founded in 1995, we build websites, custom software, and practical AI
> for small businesses and nonprofits. You'll be speaking with Karim, who has
> run the studio since day one.

**280 characters.**

### Longer version, if the space allows

> MIS, Inc. is a boutique web design and development studio in downtown
> Albuquerque. We've built websites continuously since 1995 — through the
> dial-up era, e-commerce, mobile, and now AI — for New Mexico small businesses
> and nonprofits, alongside clients across the country.
>
> No account managers and no handoffs: you'll be speaking with Karim, who
> founded the studio and still does or directs the work.

---

## Event type: Free Consultation

Paste into **Cal.com → Event Types → Free Consultation → Description**.

### Recommended

> A relaxed 30 minutes to talk through what you're trying to fix.
>
> Tell us what's happening in your business and what's frustrating you about
> your current site. We'll give you a straight read on what we'd do, what we
> wouldn't bother with, and roughly what it involves — including when the honest
> answer is that you don't need us.
>
> No pitch deck, no obligation. If it makes sense afterwards, we'll follow up
> with a written proposal and a fixed price.
>
> **Bring:** your current website address, and any examples of sites you like.

### Shorter alternative

> Thirty minutes, no obligation. Tell us what you're trying to fix and we'll
> give you an honest read on what would solve it — including when the answer is
> that you don't need us. No pitch, no pressure.

### Suggested settings

| Setting | Suggestion | Why |
|---|---|---|
| Duration | 30 minutes | Matches the page copy; long enough to be useful |
| Locations | Phone, video, and in person | The page says all three are offered |
| Buffer after | 10–15 minutes | Notes written while it is fresh |
| Minimum notice | 4 hours | Stops same-hour bookings |
| Booking questions | Website URL, what prompted the call | Lets you arrive prepared |
| Confirmation email | Include the phone number | Gives people a way to reach you if plans change |

**Keep the URL slug `misinc/free-consultation`** — it is hard-coded in
`src/components/CalEmbed.astro` via the page. If you change it there, change it
in the page too.

---

## Implementation note

The site does **not** use `@calcom/embed-react`. That package would require
adding React, `@astrojs/react`, and a hydration boundary to an otherwise
framework-free static site, for a single widget. Cal's vanilla loader takes the
same configuration and ships no framework.

The embed is themed to light with the brand red (`#a62025`) as its accent —
Cal otherwise follows the visitor's system theme, which drops a dark calendar
onto a warm paper page. The `ui` call must run **before** the `inline` call or
the theme is ignored.

`CalEmbed.astro` takes `calLink` and `namespace` props, so the same component
can power the other booking pages (`/schedule`, `/website-meeting`,
`/proposal-review`, `/meeting-at-misinc`) when those are migrated.
