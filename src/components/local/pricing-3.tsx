import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const plans = [
    {
        name: 'Monthly',
        price: '$29',
        period: '/month',
        description: 'Flexible month-to-month billing',
        features: ['All features included', 'Cancel anytime', 'No long-term commitment'],
    },
    {
        name: 'Annual',
        price: '$19',
        period: '/month',
        description: 'Save 35% with annual billing',
        features: ['All features included', '2 months free', 'Priority onboarding'],
        highlighted: true,
        badge: 'Best Value',
    },
]

export default function PricingSection() {
    return (
        <section className="@container relative overflow-hidden py-12 pt-16">
            <div className="mx-auto max-w-2xl px-6 relative z-10">
                <div className="text-center">
                    <h2 className="text-balance geo-regular-italic text-4xl font-medium rethink-sans">One Plan, Simple Pricing</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance rethink-sans">Everything you need to build powerful integrations. Choose your billing cycle.</p>
                </div>
                <div className="@xl:grid-cols-2 @xl:gap-3 mt-12 grid gap-6">
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            variant={plan.highlighted ? 'default' : 'mixed'}
                            className={cn('relative p-6', plan.highlighted && 'ring-primary')}>
                            <div className="mb-6">
                                <h3 className="text-foreground font-medium rethink-sans">{plan.name}</h3>
                                <p className="text-muted-foreground mt-1 text-sm rethink-sans">{plan.description}</p>
                            </div>
                            <div>
                                <span className="geo-regular-italic text-5xl font-medium">{plan.price}</span>
                                <span className="text-muted-foreground rethink-sans">{plan.period}</span>
                            </div>
                            <ul className="mt-6 space-y-3">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="text-muted-foreground flex items-center gap-2 text-sm rethink-sans">
                                        <Check className="text-primary size-4" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                asChild
                                variant={plan.highlighted ? 'default' : 'outline'}
                                className="mt-8 w-full gap-2">
                                <Link href="#link">
                                    Get Started
                                    <ArrowRight className="size-4" />
                                </Link>
                            </Button>
                        </Card>
                    ))}
                </div>
                <p className="text-muted-foreground mt-8 text-center text-sm rethink-sans">All plans include a 14-day free trial. No credit card required.</p>
            </div>
        </section>
    )
}