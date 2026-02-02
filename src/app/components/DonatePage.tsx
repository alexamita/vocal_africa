/**
 * DonatePage Component
 *
 * Handles the donation flow for the organization.
 * Key features:
 * - Currency selection (KES, USD, EUR, GBP).
 * - Predefined and custom donation amounts.
 * - One-time vs Monthly donation frequency.
 * - Alternative donation methods (Bank Transfer, Mobile Money, Checks).
 * - Transparency section highlighting financial integrity.
 */
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Coins,
  CreditCard,
  Landmark,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { ImageWithFallback } from "@/app/components/ui/ImageWithFallback";

const CURRENCIES = [
  { code: "KES", symbol: "Ksh", label: "Kenyan Shilling", rate: 1 },
  { code: "USD", symbol: "$", label: "US Dollar", rate: 0.0077 },
  { code: "EUR", symbol: "€", label: "Euro", rate: 0.0071 },
  { code: "GBP", symbol: "£", label: "British Pound", rate: 0.0059 },
];

export const DonatePage = () => {
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  const [amount, setAmount] = useState("1000");
  const [frequency, setFrequency] = useState("monthly");

  const presets = useMemo(() => {
    if (currency.code === "KES") return ["500", "1000", "5000"];
    return ["25", "50", "100"];
  }, [currency]);

  // Unused logic removed

  return (
    <div className="min-h-screen bg-white pt-20 font-sans selection:bg-orange-100">
      {/* Hero Section with Split Background */}
      <section className="relative overflow-hidden bg-green-900 py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1543926648-bb1ade2f4dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZXN0JTIwbWFyY2glMjBqdXN0aWNlJTIwYWZyaWNhfGVufDF8fHx8MTc2OTc5Mjc2NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="VOCAL Impact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500 transform skew-x-12 translate-x-1/2 opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 text-white">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-1.5 bg-orange-500 text-white text-xs font-bold uppercase tracking-[0.3em] mb-8 rounded-sm">
                  Empower Change
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold mb-8 uppercase leading-[0.9] tracking-tighter">
                  Every Gift <br />
                  <span className="text-orange-500 italic">Ignites</span>{" "}
                  Action.
                </h1>
                <p className="text-xl text-green-100/90 leading-relaxed mb-12 max-w-xl font-medium">
                  Your support enables us to challenge injustice at its roots.
                  Together, we are building a continent where every voice is
                  heard and every leader is accountable.
                </p>

                <div className="grid grid-cols-2 gap-8">
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-orange-500 transition-colors">
                      <ShieldCheck className="w-6 h-6 text-orange-500 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-green-300 uppercase tracking-widest">
                        Secure Payments
                      </p>
                      <p className="text-sm font-bold uppercase">
                        PCI Compliant
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-orange-500 transition-colors">
                      <Globe className="w-6 h-6 text-orange-500 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-green-300 uppercase tracking-widest">
                        Transparency
                      </p>
                      <p className="text-sm font-bold uppercase">
                        100% Accountable
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2 w-full max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-0 overflow-hidden bg-white rounded-[40px]">
                  <div className="bg-orange-500 p-8 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <h3 className="text-2xl font-bold uppercase tracking-tighter">
                      Support VOCAL Africa
                    </h3>
                  </div>

                  <CardContent className="p-8 md:p-12 space-y-10">
                    {/* Currency Selector */}
                    <div className="space-y-4">
                      <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                        Choose Currency
                      </label>
                      <div className="grid grid-cols-4 gap-3">
                        {CURRENCIES.map((curr) => (
                          <button
                            key={curr.code}
                            onClick={() => {
                              setCurrency(curr);
                              setAmount(curr.code === "KES" ? "1000" : "50");
                            }}
                            className={`py-3 rounded-xl text-xs font-bold transition-all border ${currency.code === curr.code ? "bg-green-900 border-green-900 text-white shadow-lg" : "bg-gray-50 border-gray-100 text-gray-500 hover:border-orange-500"}`}
                          >
                            {curr.code}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Amount Selection */}
                    <div className="space-y-4">
                      <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                        Select Amount
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        {presets.map((amt) => (
                          <button
                            key={amt}
                            onClick={() => setAmount(amt)}
                            className={`h-16 rounded-2xl font-bold text-xl transition-all border-2 ${amount === amt ? "bg-orange-500 border-orange-500 text-white shadow-xl -translate-y-1" : "bg-white border-gray-100 text-gray-700 hover:border-orange-500"}`}
                          >
                            <span className="text-sm mr-1 opacity-60 font-medium">
                              {currency.symbol}
                            </span>
                            {Number(amt).toLocaleString()}
                          </button>
                        ))}
                      </div>

                      <div className="relative group">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xl group-focus-within:text-green-900 transition-colors">
                          {currency.symbol}
                        </span>
                        <Input
                          placeholder="Other amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="h-20 pl-16 text-2xl font-bold bg-gray-50 border-gray-100 focus:bg-white focus:border-green-900 transition-all rounded-2xl ring-0 focus:ring-4 focus:ring-green-900/5"
                        />
                      </div>
                    </div>

                    {/* Frequency */}
                    <div className="flex p-1.5 bg-gray-50 rounded-2xl">
                      <button
                        onClick={() => setFrequency("one-time")}
                        className={`flex-1 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all ${frequency === "one-time" ? "bg-white text-green-900 shadow-md" : "text-gray-400 hover:text-gray-600"}`}
                      >
                        One-time
                      </button>
                      <button
                        onClick={() => setFrequency("monthly")}
                        className={`flex-1 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all ${frequency === "monthly" ? "bg-white text-green-900 shadow-md" : "text-gray-400 hover:text-gray-600"}`}
                      >
                        Monthly
                      </button>
                    </div>

                    <div className="space-y-4 pt-4">
                      <Button className="w-full bg-red-600 hover:bg-green-900 text-white font-bold px-12 py-6 h-auto uppercase tracking-widest text-lg rounded-2xl shadow-2xl hover:shadow-red-600/20 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group">
                        PROCEED TO DONATE
                        <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                      </Button>
                      <div className="flex justify-center gap-6 opacity-30">
                        <CreditCard className="w-5 h-5" />
                        <Landmark className="w-5 h-5" />
                        <DollarSign className="w-5 h-5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Donation Methods */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h2 className="text-sm font-bold text-orange-500 mb-6 uppercase tracking-[0.4em]">
              Alternative Ways to Give
            </h2>
            <h3 className="text-5xl font-bold text-green-900 mb-8 uppercase leading-none tracking-tighter">
              Other Ways <br />
              To Support
            </h3>
            <p className="text-xl text-gray-500 leading-relaxed font-medium">
              Prefer to donate through other channels? We support bank
              transfers, mobile money, and check payments for your convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-10 rounded-[40px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-sm mb-10 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                <Landmark className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-green-900 mb-6 uppercase tracking-tight">
                Bank Transfer
              </h4>
              <div className="space-y-4 text-gray-600 font-medium">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Bank Name
                  </p>
                  <p className="text-lg">Standard Chartered Bank</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Account Name
                  </p>
                  <p className="text-lg">VOCAL Africa Foundation</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Account Number
                  </p>
                  <p className="text-lg font-bold text-green-900 tracking-wider">
                    01020304050607
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Swift Code
                  </p>
                  <p className="text-lg">SCBLKENXXX</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-10 rounded-[40px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm mb-10 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                <Coins className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-green-900 mb-6 uppercase tracking-tight">
                Mobile Money
              </h4>
              <div className="space-y-6 text-gray-600 font-medium">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Lipa Na M-PESA
                  </p>
                  <p className="text-lg font-bold text-green-900 mb-2">
                    Paybill: 888999
                  </p>
                  <p className="text-sm text-gray-400">Account: DONATE</p>
                </div>
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Airtel Money
                  </p>
                  <p className="text-lg font-bold text-green-900">
                    Till Number: 112233
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-400 leading-relaxed italic">
                    Please send a screenshot of the confirmation to
                    info@vocalafrica.org for our records.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-10 rounded-[40px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm mb-10 group-hover:bg-green-900 group-hover:text-white transition-all duration-500">
                <CreditCard className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-green-900 mb-6 uppercase tracking-tight">
                Checks & Mail
              </h4>
              <div className="space-y-4 text-gray-600 font-medium">
                <p className="text-lg leading-relaxed">
                  Checks should be made payable to: <br />
                  <span className="font-bold text-green-900 uppercase">
                    VOCAL Africa Foundation
                  </span>
                </p>
                <div className="pt-4">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Mailing Address
                  </p>
                  <p className="text-lg">
                    736 Tabere Cres,
                    <br />
                    P.O. Box 44556-00100,
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
                <div className="pt-6">
                  <Button
                    variant="outline"
                    className="w-full border-green-900 text-green-900 font-bold py-4 rounded-xl uppercase tracking-widest text-xs cursor-pointer group-hover:bg-green-900 group-hover:text-white transition-colors"
                  >
                    Request a Tax Receipt
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transparency & Financial Integrity */}
      <section className="py-32 bg-gray-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-green-900/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-900 rounded-[60px] p-12 lg:p-24 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
            <div className="absolute bottom-0 right-0 w-full lg:w-1/2 h-1/2 lg:h-full opacity-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1543926648-bb1ade2f4dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Transparency"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white">
                <div className="w-20 h-20 bg-orange-500 rounded-3xl flex items-center justify-center mb-10 shadow-2xl shadow-orange-500/30">
                  <Zap className="w-10 h-10" />
                </div>
                <h3 className="text-5xl font-bold mb-8 uppercase leading-tight tracking-tighter">
                  Radical <br />
                  <span className="text-orange-500">Transparency</span>
                </h3>
                <p className="text-xl text-green-100/80 leading-relaxed mb-12 font-medium">
                  We maintain the highest standards of financial integrity. 92%
                  of every donation goes directly into program execution. We
                  publish full financial audits and impact assessments quarterly
                  for public review.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button className="bg-white text-green-900 hover:bg-orange-500 hover:text-white font-bold px-10 py-5 h-auto uppercase tracking-widest rounded-2xl shadow-xl transition-all cursor-pointer">
                    View 2025 Audit Report
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 font-bold px-10 py-5 h-auto uppercase tracking-widest rounded-2xl transition-all cursor-pointer"
                  >
                    Our Ethics Policy
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Program Impact", value: "92%", icon: CheckCircle2 },
                  { label: "Advocacy reach", value: "1.2M+", icon: Globe },
                  { label: "Communities", value: "500+", icon: Coins },
                  { label: "Trust Rating", value: "AAA", icon: ShieldCheck },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[40px]"
                  >
                    <stat.icon className="w-6 h-6 text-orange-500 mb-6" />
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-bold text-green-300 uppercase tracking-[0.2em]">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
