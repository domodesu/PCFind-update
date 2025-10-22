// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  parts;
  builds;
  constructor() {
    this.parts = /* @__PURE__ */ new Map();
    this.builds = /* @__PURE__ */ new Map();
    this.seedParts();
  }
  seedParts() {
    const sampleParts = [
      // CPUs
      {
        name: "AMD Ryzen 9 7950X",
        category: "CPU",
        price: 32500,
        imageUrl: null,
        specs: {
          Cores: "16",
          Threads: "32",
          "Base Clock": "4.5 GHz",
          "Boost Clock": "5.7 GHz"
        },
        retailer: "PC Express",
        available: ["PC Express", "EasyPC"],
        socket: "AM5",
        chipset: null,
        formFactor: null,
        ramType: "DDR5",
        wattage: null,
        tdp: 170
      },
      {
        name: "Intel Core i9-14900K",
        category: "CPU",
        price: 38e3,
        imageUrl: null,
        specs: {
          Cores: "24",
          Threads: "32",
          "Base Clock": "3.2 GHz",
          "Boost Clock": "6.0 GHz"
        },
        retailer: "EasyPC",
        available: ["EasyPC", "Lazada"],
        socket: "LGA1700",
        chipset: null,
        formFactor: null,
        ramType: "DDR5",
        wattage: null,
        tdp: 253
      },
      {
        name: "AMD Ryzen 7 7800X3D",
        category: "CPU",
        price: 25e3,
        imageUrl: null,
        specs: {
          Cores: "8",
          Threads: "16",
          "Base Clock": "4.2 GHz",
          "Boost Clock": "5.0 GHz"
        },
        retailer: "Lazada",
        available: ["Lazada", "Shopee"],
        socket: "AM5",
        chipset: null,
        formFactor: null,
        ramType: "DDR5",
        wattage: null,
        tdp: 120
      },
      {
        name: "Intel Core i5-14600K",
        category: "CPU",
        price: 18500,
        imageUrl: null,
        specs: {
          Cores: "14",
          Threads: "20",
          "Base Clock": "3.5 GHz",
          "Boost Clock": "5.3 GHz"
        },
        retailer: "Shopee",
        available: ["Shopee", "PC Express"],
        socket: "LGA1700",
        chipset: null,
        formFactor: null,
        ramType: "DDR5",
        wattage: null,
        tdp: 181
      },
      // GPUs
      {
        name: "NVIDIA GeForce RTX 4090 Ti",
        category: "GPU",
        price: 58e3,
        imageUrl: null,
        specs: {
          "VRAM": "24GB GDDR6X",
          "Boost Clock": "2.6 GHz",
          "CUDA Cores": "16384"
        },
        retailer: "PC Express",
        available: ["PC Express", "EasyPC"],
        socket: null,
        chipset: null,
        formFactor: null,
        ramType: null,
        wattage: null,
        tdp: 450
      },
      {
        name: "AMD Radeon RX 7900 XTX",
        category: "GPU",
        price: 48e3,
        imageUrl: null,
        specs: {
          "VRAM": "24GB GDDR6",
          "Boost Clock": "2.5 GHz",
          "Stream Processors": "6144"
        },
        retailer: "EasyPC",
        available: ["EasyPC", "Lazada"],
        socket: null,
        chipset: null,
        formFactor: null,
        ramType: null,
        wattage: null,
        tdp: 355
      },
      {
        name: "NVIDIA GeForce RTX 4070 Super",
        category: "GPU",
        price: 36e3,
        imageUrl: null,
        specs: {
          "VRAM": "12GB GDDR6X",
          "Boost Clock": "2.48 GHz",
          "CUDA Cores": "7168"
        },
        retailer: "Lazada",
        available: ["Lazada", "Shopee", "PC Express"],
        socket: null,
        chipset: null,
        formFactor: null,
        ramType: null,
        wattage: null,
        tdp: 220
      },
      // Motherboards
      {
        name: "ASUS ROG Strix X670E-E Gaming WiFi",
        category: "Motherboard",
        price: 28e3,
        imageUrl: null,
        specs: {
          Socket: "AM5",
          Chipset: "X670E",
          "Form Factor": "ATX",
          "Memory Type": "DDR5"
        },
        retailer: "PC Express",
        available: ["PC Express", "EasyPC"],
        socket: "AM5",
        chipset: "X670E",
        formFactor: "ATX",
        ramType: "DDR5",
        wattage: null,
        tdp: null
      },
      {
        name: "MSI MAG Z790 Tomahawk WiFi",
        category: "Motherboard",
        price: 24e3,
        imageUrl: null,
        specs: {
          Socket: "LGA1700",
          Chipset: "Z790",
          "Form Factor": "ATX",
          "Memory Type": "DDR5"
        },
        retailer: "EasyPC",
        available: ["EasyPC", "Shopee"],
        socket: "LGA1700",
        chipset: "Z790",
        formFactor: "ATX",
        ramType: "DDR5",
        wattage: null,
        tdp: null
      },
      {
        name: "Gigabyte B650 AORUS Elite AX",
        category: "Motherboard",
        price: 15500,
        imageUrl: null,
        specs: {
          Socket: "AM5",
          Chipset: "B650",
          "Form Factor": "ATX",
          "Memory Type": "DDR5"
        },
        retailer: "Shopee",
        available: ["Shopee", "Lazada"],
        socket: "AM5",
        chipset: "B650",
        formFactor: "ATX",
        ramType: "DDR5",
        wattage: null,
        tdp: null
      },
      // RAM
      {
        name: "Corsair Vengeance DDR5 32GB (2\xD716GB) 6000MHz",
        category: "RAM",
        price: 8500,
        imageUrl: null,
        specs: {
          Capacity: "32GB (2\xD716GB)",
          Speed: "6000 MHz",
          Type: "DDR5",
          CAS: "CL36"
        },
        retailer: "Shopee",
        available: ["Shopee", "PC Express"],
        socket: null,
        chipset: null,
        formFactor: null,
        ramType: "DDR5",
        wattage: null,
        tdp: null
      },
      {
        name: "G.Skill Trident Z5 RGB 32GB (2\xD716GB) 6400MHz",
        category: "RAM",
        price: 9800,
        imageUrl: null,
        specs: {
          Capacity: "32GB (2\xD716GB)",
          Speed: "6400 MHz",
          Type: "DDR5",
          CAS: "CL32"
        },
        retailer: "PC Express",
        available: ["PC Express", "EasyPC"],
        socket: null,
        chipset: null,
        formFactor: null,
        ramType: "DDR5",
        wattage: null,
        tdp: null
      },
      {
        name: "Kingston Fury Beast DDR5 32GB (2\xD716GB) 5200MHz",
        category: "RAM",
        price: 7200,
        imageUrl: null,
        specs: {
          Capacity: "32GB (2\xD716GB)",
          Speed: "5200 MHz",
          Type: "DDR5",
          CAS: "CL40"
        },
        retailer: "Lazada",
        available: ["Lazada", "Shopee"],
        socket: null,
        chipset: null,
        formFactor: null,
        ramType: "DDR5",
        wattage: null,
        tdp: null
      },
      {
        name: "Corsair Vengeance DDR5 64GB (2\xD732GB) 5800MHz",
        category: "RAM",
        price: 15500,
        imageUrl: null,
        specs: {
          Capacity: "64GB (2\xD732GB)",
          Speed: "5800 MHz",
          Type: "DDR5",
          CAS: "CL40"
        },
        retailer: "EasyPC",
        available: ["EasyPC", "PC Express"],
        socket: null,
        chipset: null,
        formFactor: null,
        ramType: "DDR5",
        wattage: null,
        tdp: null
      },
      // Storage
      {
        name: "Samsung 990 PRO 2TB NVMe SSD",
        category: "Storage",
        price: 9500,
        imageUrl: null,
        specs: {
          Capacity: "2TB",
          Interface: "NVMe PCIe 4.0",
          "Read Speed": "7,450 MB/s",
          "Write Speed": "6,900 MB/s"
        },
        retailer: "PC Express",
        available: ["PC Express", "Lazada"],
        socket: null,
        chipset: null,
        formFactor: "M.2",
        ramType: null,
        wattage: null,
        tdp: null
      },
      {
        name: "WD Black SN850X 1TB NVMe SSD",
        category: "Storage",
        price: 5800,
        imageUrl: null,
        specs: {
          Capacity: "1TB",
          Interface: "NVMe PCIe 4.0",
          "Read Speed": "7,300 MB/s",
          "Write Speed": "6,300 MB/s"
        },
        retailer: "Shopee",
        available: ["Shopee", "EasyPC"],
        socket: null,
        chipset: null,
        formFactor: "M.2",
        ramType: null,
        wattage: null,
        tdp: null
      },
      // PSU
      {
        name: "Corsair RM850x 850W 80+ Gold",
        category: "PSU",
        price: 7500,
        imageUrl: null,
        specs: {
          Wattage: "850W",
          Certification: "80+ Gold",
          Modular: "Fully Modular"
        },
        retailer: "PC Express",
        available: ["PC Express", "EasyPC"],
        socket: null,
        chipset: null,
        formFactor: "ATX",
        ramType: null,
        wattage: 850,
        tdp: null
      },
      {
        name: "Seasonic Focus GX-750 750W 80+ Gold",
        category: "PSU",
        price: 6200,
        imageUrl: null,
        specs: {
          Wattage: "750W",
          Certification: "80+ Gold",
          Modular: "Fully Modular"
        },
        retailer: "Lazada",
        available: ["Lazada", "Shopee"],
        socket: null,
        chipset: null,
        formFactor: "ATX",
        ramType: null,
        wattage: 750,
        tdp: null
      },
      // Cases
      {
        name: "Lian Li O11 Dynamic EVO",
        category: "Case",
        price: 9800,
        imageUrl: null,
        specs: {
          Type: "Mid Tower",
          "Form Factor": "ATX",
          Color: "Black"
        },
        retailer: "PC Express",
        available: ["PC Express", "EasyPC"],
        socket: null,
        chipset: null,
        formFactor: "ATX",
        ramType: null,
        wattage: null,
        tdp: null
      },
      {
        name: "NZXT H510 Flow",
        category: "Case",
        price: 5500,
        imageUrl: null,
        specs: {
          Type: "Mid Tower",
          "Form Factor": "ATX",
          Color: "White"
        },
        retailer: "Shopee",
        available: ["Shopee", "Lazada"],
        socket: null,
        chipset: null,
        formFactor: "ATX",
        ramType: null,
        wattage: null,
        tdp: null
      },
      // Cooling
      {
        name: "NZXT Kraken X63 280mm AIO",
        category: "Cooling",
        price: 8900,
        imageUrl: null,
        specs: {
          Type: "AIO Liquid Cooler",
          "Radiator Size": "280mm",
          "Fan Speed": "500-1800 RPM"
        },
        retailer: "PC Express",
        available: ["PC Express", "EasyPC"],
        socket: null,
        chipset: null,
        formFactor: null,
        ramType: null,
        wattage: null,
        tdp: null
      },
      {
        name: "Noctua NH-D15 chromax.black",
        category: "Cooling",
        price: 6500,
        imageUrl: null,
        specs: {
          Type: "Air Cooler",
          Height: "165mm",
          "TDP Rating": "250W"
        },
        retailer: "EasyPC",
        available: ["EasyPC", "Lazada"],
        socket: null,
        chipset: null,
        formFactor: null,
        ramType: null,
        wattage: null,
        tdp: null
      }
    ];
    sampleParts.forEach((partData) => {
      const id = randomUUID();
      const part = { ...partData, id };
      this.parts.set(id, part);
    });
  }
  async loadFromJson(jsonFilePath) {
    try {
      const fs2 = await import("fs");
      if (!fs2.existsSync(jsonFilePath)) return;
      const raw = fs2.readFileSync(jsonFilePath, "utf-8");
      const items = JSON.parse(raw);
      for (const item of items) {
        const id = randomUUID();
        const part = { ...item, id };
        this.parts.set(id, part);
      }
    } catch (err) {
      console.error("Failed to load parts from JSON", err);
    }
  }
  // Parts methods
  async getAllParts() {
    return Array.from(this.parts.values());
  }
  async getPartsByCategory(category) {
    return Array.from(this.parts.values()).filter((part) => part.category === category);
  }
  async getPartById(id) {
    return this.parts.get(id);
  }
  async getPartsByIds(ids) {
    return ids.map((id) => this.parts.get(id)).filter((part) => part !== void 0);
  }
  async createPart(insertPart) {
    const id = randomUUID();
    const part = {
      ...insertPart,
      id,
      imageUrl: insertPart.imageUrl ?? null,
      socket: insertPart.socket ?? null,
      chipset: insertPart.chipset ?? null,
      formFactor: insertPart.formFactor ?? null,
      ramType: insertPart.ramType ?? null,
      wattage: insertPart.wattage ?? null,
      tdp: insertPart.tdp ?? null
    };
    this.parts.set(id, part);
    return part;
  }
  // Builds methods
  async getAllBuilds() {
    return Array.from(this.builds.values());
  }
  async getBuildById(id) {
    return this.builds.get(id);
  }
  async createBuild(insertBuild) {
    const id = randomUUID();
    const build = {
      ...insertBuild,
      id,
      compatible: insertBuild.compatible ?? null,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.builds.set(id, build);
    return build;
  }
  async updateBuild(id, updates) {
    const build = this.builds.get(id);
    if (!build) return void 0;
    const updatedBuild = { ...build, ...updates };
    this.builds.set(id, updatedBuild);
    return updatedBuild;
  }
  async deleteBuild(id) {
    return this.builds.delete(id);
  }
};
var storage = new MemStorage();

// server/routes.ts
import path from "path";

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var parts = pgTable("parts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  category: text("category").notNull(),
  // PartCategory
  price: integer("price").notNull(),
  // Price in PHP
  imageUrl: text("image_url"),
  specs: jsonb("specs").notNull(),
  // Key-value specs
  retailer: text("retailer").notNull(),
  // Primary retailer
  available: jsonb("available").notNull(),
  // Array of available retailers
  socket: text("socket"),
  // For CPU/Motherboard compatibility
  chipset: text("chipset"),
  // For Motherboard
  formFactor: text("form_factor"),
  // For Motherboard/Case/PSU
  ramType: text("ram_type"),
  // DDR4/DDR5 for RAM/Motherboard
  wattage: integer("wattage"),
  // For PSU
  tdp: integer("tdp")
  // For CPU/GPU power requirements
});
var insertPartSchema = createInsertSchema(parts).omit({
  id: true
});
var builds = pgTable("builds", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  components: jsonb("components").notNull(),
  // Object with category keys and part IDs
  totalPrice: integer("total_price").notNull(),
  compatible: jsonb("compatible"),
  // Compatibility status object
  createdAt: text("created_at").notNull()
});
var insertBuildSchema = createInsertSchema(builds).omit({
  id: true,
  createdAt: true
});

// server/routes.ts
import { randomUUID as randomUUID2 } from "crypto";
var forumPosts = [];
function buildRetailerUrl(retailer, query) {
  const encoded = encodeURIComponent(query);
  switch (retailer) {
    case "Lazada":
      return `https://www.lazada.com.ph/catalog/?q=${encoded}`;
    case "Shopee":
      return `https://shopee.ph/search?keyword=${encoded}`;
    case "PC Express":
      return `https://pcx.com.ph/search?q=${encoded}`;
    case "EasyPC":
      return `https://easypc.com.ph/search?q=${encoded}`;
    default:
      return `https://www.google.com/search?q=${encoded}`;
  }
}
function computeRetailerPrice(basePrice, retailer) {
  const adjustments = {
    Lazada: 1.02,
    Shopee: 0.98,
    "PC Express": 1,
    EasyPC: 0.99
  };
  const factor = adjustments[retailer] ?? 1;
  return Math.round(basePrice * factor / 10) * 10;
}
async function registerRoutes(app2) {
  app2.post("/api/builds/analyze", async (req, res) => {
    try {
      const components = req.body?.components;
      if (!components || typeof components !== "object") {
        return res.status(400).json({ message: "components are required" });
      }
      const selectedIds = Object.values(components).filter(Boolean);
      const parts2 = await storage.getPartsByIds(selectedIds);
      const byCategory = {};
      for (const p of parts2) {
        byCategory[p.category.toLowerCase()] = p;
      }
      const issues = [];
      const cpu = byCategory["cpu"];
      const mb = byCategory["motherboard"];
      const ram = byCategory["ram"];
      const gpu = byCategory["gpu"];
      const psu = byCategory["psu"];
      const pcCase = byCategory["case"];
      if (cpu && mb && cpu.socket && mb.socket && cpu.socket !== mb.socket) {
        issues.push({ type: "error", message: `CPU socket (${cpu.socket}) does not match Motherboard socket (${mb.socket}).` });
      }
      const ramType = ram?.ramType || (typeof ram?.specs === "object" ? ram.specs["Type"] : void 0);
      if (ram && mb && ramType && mb.ramType && ramType !== mb.ramType) {
        issues.push({ type: "error", message: `RAM type (${ramType}) is incompatible with Motherboard RAM type (${mb.ramType}).` });
      }
      if (pcCase && mb && pcCase.formFactor && mb.formFactor && pcCase.formFactor !== mb.formFactor) {
        issues.push({ type: "warning", message: `Case form factor (${pcCase.formFactor}) may not fit motherboard (${mb.formFactor}).` });
      }
      const cpuTdp = typeof cpu?.tdp === "number" ? cpu.tdp : 0;
      const gpuTdp = typeof gpu?.tdp === "number" ? gpu.tdp : 0;
      const baseLoad = cpuTdp + gpuTdp + 100;
      const recommended = Math.ceil(baseLoad * 1.3 / 50) * 50;
      const psuW = typeof psu?.wattage === "number" ? psu.wattage : 0;
      if (psu && psuW && recommended > psuW) {
        issues.push({ type: "warning", message: `PSU wattage (${psuW}W) may be insufficient. Recommended \u2265 ${recommended}W.` });
      }
      const compatible = issues.find((i) => i.type === "error") === void 0;
      res.json({ compatible, issues, metrics: { recommendedPsuWattage: recommended, cpuTdp, gpuTdp } });
    } catch (error) {
      console.error("Error analyzing build:", error);
      res.status(500).json({ message: "Failed to analyze build" });
    }
  });
  app2.get("/api/price-compare", async (req, res) => {
    try {
      const name = req.query.name || "";
      const baseStr = req.query.basePrice;
      const basePrice = baseStr ? Number(baseStr) : void 0;
      if (!name || !basePrice || Number.isNaN(basePrice)) {
        return res.status(400).json({ message: "name and basePrice are required" });
      }
      const retailers = ["PC Express", "EasyPC", "Shopee", "Lazada"];
      const offers = retailers.map((retailer, idx) => ({
        retailer,
        price: computeRetailerPrice(basePrice, retailer),
        url: buildRetailerUrl(retailer, name),
        isPrimary: idx === 0
      }));
      const best = offers.reduce((min, o) => o.price < min.price ? o : min, offers[0]);
      res.json({ name, offers, best });
    } catch (error) {
      console.error("Error in price compare:", error);
      res.status(500).json({ message: "Failed to compare prices" });
    }
  });
  app2.get("/api/parts", async (req, res) => {
    try {
      const category = req.query.category;
      if (category) {
        const parts3 = await storage.getPartsByCategory(category);
        return res.json(parts3);
      }
      const parts2 = await storage.getAllParts();
      res.json(parts2);
    } catch (error) {
      console.error("Error fetching parts:", error);
      res.status(500).json({ message: "Failed to fetch parts" });
    }
  });
  app2.get("/api/parts/*", async (req, res, next) => {
    try {
      const after = req.path.replace(/^\/api\/parts\/?/, "");
      const [seg] = after.split("/");
      if (!seg || seg.toLowerCase() === "all") {
        const parts2 = await storage.getAllParts();
        return res.json(parts2);
      }
      const cat = seg.toLowerCase();
      const map = {
        cpu: "CPU",
        gpu: "GPU",
        motherboard: "Motherboard",
        ram: "RAM",
        storage: "Storage",
        psu: "PSU",
        case: "Case",
        cooling: "Cooling"
      };
      if (map[cat]) {
        const parts2 = await storage.getPartsByCategory(map[cat]);
        return res.json(parts2);
      }
      if (after.split("/").length === 1) {
        return next();
      }
      return res.status(404).json({ message: "Not found" });
    } catch (error) {
      console.error("Error in parts wildcard route:", error);
      res.status(500).json({ message: "Failed to fetch parts" });
    }
  });
  app2.post("/api/parts", async (req, res) => {
    try {
      const validation = insertPartSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid part data", errors: validation.error.errors });
      }
      const created = await storage.createPart(validation.data);
      res.status(201).json(created);
    } catch (error) {
      console.error("Error creating part:", error);
      res.status(500).json({ message: "Failed to create part" });
    }
  });
  app2.post("/api/parts/bulk", async (req, res) => {
    try {
      const items = Array.isArray(req.body) ? req.body : [];
      if (items.length === 0) {
        return res.status(400).json({ message: "Expected an array of parts" });
      }
      const results = [];
      for (const item of items) {
        const validation = insertPartSchema.safeParse(item);
        if (!validation.success) {
          return res.status(400).json({ message: "Invalid part in array", errors: validation.error.errors });
        }
        results.push(await storage.createPart(validation.data));
      }
      res.status(201).json(results);
    } catch (error) {
      console.error("Error bulk creating parts:", error);
      res.status(500).json({ message: "Failed to create parts" });
    }
  });
  app2.post("/api/admin/reload", async (_req, res) => {
    try {
      const jsonPath = path.resolve(import.meta.dirname, "..", "data", "parts.json");
      await storage.loadFromJson(jsonPath);
      res.json({ ok: true });
    } catch (error) {
      console.error("Error reloading parts:", error);
      res.status(500).json({ message: "Failed to reload parts" });
    }
  });
  app2.get("/api/parts/:id", async (req, res) => {
    try {
      const part = await storage.getPartById(req.params.id);
      if (!part) {
        return res.status(404).json({ message: "Part not found" });
      }
      res.json(part);
    } catch (error) {
      console.error("Error fetching part:", error);
      res.status(500).json({ message: "Failed to fetch part" });
    }
  });
  app2.get("/api/parts/selected/:ids", async (req, res) => {
    try {
      const idsParam = req.params.ids || "";
      const ids = idsParam.split(",").map((s) => s.trim()).filter(Boolean);
      if (ids.length === 0) return res.json([]);
      const parts2 = await storage.getPartsByIds(ids);
      res.json(parts2);
    } catch (error) {
      console.error("Error fetching selected parts (GET):", error);
      res.status(500).json({ message: "Failed to fetch selected parts" });
    }
  });
  app2.post("/api/parts/selected", async (req, res) => {
    try {
      const { ids } = req.body;
      if (!Array.isArray(ids)) {
        return res.status(400).json({ message: "IDs must be an array" });
      }
      const parts2 = await storage.getPartsByIds(ids);
      res.json(parts2);
    } catch (error) {
      console.error("Error fetching selected parts:", error);
      res.status(500).json({ message: "Failed to fetch selected parts" });
    }
  });
  app2.get("/api/builds", async (req, res) => {
    try {
      const builds2 = await storage.getAllBuilds();
      res.json(builds2);
    } catch (error) {
      console.error("Error fetching builds:", error);
      res.status(500).json({ message: "Failed to fetch builds" });
    }
  });
  app2.get("/api/builds/:id", async (req, res) => {
    try {
      const build = await storage.getBuildById(req.params.id);
      if (!build) {
        return res.status(404).json({ message: "Build not found" });
      }
      res.json(build);
    } catch (error) {
      console.error("Error fetching build:", error);
      res.status(500).json({ message: "Failed to fetch build" });
    }
  });
  app2.post("/api/builds", async (req, res) => {
    try {
      const validation = insertBuildSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          message: "Invalid build data",
          errors: validation.error.errors
        });
      }
      const build = await storage.createBuild(validation.data);
      res.status(201).json(build);
    } catch (error) {
      console.error("Error creating build:", error);
      res.status(500).json({ message: "Failed to create build" });
    }
  });
  app2.patch("/api/builds/:id", async (req, res) => {
    try {
      const build = await storage.updateBuild(req.params.id, req.body);
      if (!build) {
        return res.status(404).json({ message: "Build not found" });
      }
      res.json(build);
    } catch (error) {
      console.error("Error updating build:", error);
      res.status(500).json({ message: "Failed to update build" });
    }
  });
  app2.delete("/api/builds/:id", async (req, res) => {
    try {
      const success = await storage.deleteBuild(req.params.id);
      if (!success) {
        return res.status(404).json({ message: "Build not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting build:", error);
      res.status(500).json({ message: "Failed to delete build" });
    }
  });
  app2.get("/api/forum/posts", (_req, res) => {
    res.json(forumPosts);
  });
  app2.post("/api/forum/posts", (req, res) => {
    const { title, content, author } = req.body || {};
    if (!title || !content) {
      return res.status(400).json({ message: "title and content are required" });
    }
    const post = {
      id: randomUUID2(),
      title,
      content,
      author: author || "Anonymous",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    forumPosts.unshift(post);
    res.status(201).json(post);
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/index.ts
import path4 from "path";

// server/vite.ts
import express from "express";
import fs from "fs";
import path3 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path2 from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  // Use relative asset paths in production so the app works
  // when hosted under a subpath or opened from a zip.
  base: process.env.NODE_ENV === "production" ? "./" : "/",
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      ),
      await import("@replit/vite-plugin-dev-banner").then(
        (m) => m.devBanner()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path2.resolve(import.meta.dirname, "client", "src"),
      "@shared": path2.resolve(import.meta.dirname, "shared"),
      "@assets": path2.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path2.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path2.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path3.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path3.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("/assets", express.static(path3.resolve(distPath, "assets")));
  app2.use("*", (_req, res) => {
    res.sendFile(path3.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path5 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path5.startsWith("/api")) {
      let logLine = `${req.method} ${path5} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  const jsonPath = path4.resolve(import.meta.dirname, "..", "data", "parts.json");
  await storage.loadFromJson(jsonPath);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
