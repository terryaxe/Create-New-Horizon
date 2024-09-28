const $SteamParallelMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine")
const $ItemRecipeCapability = Java.loadClass("com.gregtechceu.gtceu.api.capability.recipe.ItemRecipeCapability")
GTCEuStartupEvents.registry('gtceu:machine',event =>{
    event.create("steam_piston_hammer", "multiblock", (holder) => new $SteamParallelMultiblockMachine(holder, 8))
        .rotationState(RotationState.ALL)
        .recipeType(GTRecipeTypes.FORGE_HAMMER_RECIPES)
        .recipeModifier((machine, recipe) => $SteamParallelMultiblockMachine.recipeModifier(machine, recipe, 1.5), true)
        .addOutputLimit($ItemRecipeCapability.CAP, 1)
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAA", " E ", "   ", "   ", "   ")
            .aisle("ABA", "E#E", "EBE", "ECE", "EDE")
            .aisle("AAA", " S ", "   ", "   ", "   ")
            .where("S", Predicates.controller(Predicates.blocks(definition.get())))
            .where("A", Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS.get())
                .setMinGlobalLimited(5)
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM)))
            .where("B", Predicates.blocks("gtceu:wrought_iron_block"))
            .where("C", Predicates.blocks("minecraft:sticky_piston"))
            .where("D", Predicates.abilities(PartAbility.STEAM))
            .where("E", Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS.get()))
            .where("#", Predicates.air())
            .where(" ", Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_bronze_plated_bricks", "gtceu:block/machines/forge_hammer")

    event.create("steam_pressor", "multiblock", (holder) => new $SteamParallelMultiblockMachine(holder, 8))
        .rotationState(RotationState.ALL)
        .recipeType(GTRecipeTypes.COMPRESSOR_RECIPES)
        .recipeModifier((machine, recipe) => $SteamParallelMultiblockMachine.recipeModifier(machine, recipe, 1.5), true)
        .addOutputLimit($ItemRecipeCapability.CAP, 1)
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("XXX", "XXX", "XXX")
            .aisle("XXX", "X#X", "XXX")
            .aisle("XXX", "X#X", "XXX")
            .aisle("XXX", "XSX", "XXX")
            .where("S", Predicates.controller(Predicates.blocks(definition.get())))
            .where("X", Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS.get())
                .setMinGlobalLimited(10)
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM)))
            .where("#", Predicates.air())
            .where(" ", Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_bronze_plated_bricks", "gtceu:block/steam_pressor")

    event.create("steam_foundry", "multiblock", (holder) => new $SteamParallelMultiblockMachine(holder, 8))
        .rotationState(RotationState.ALL)
        .recipeType(GTRecipeTypes.ALLOY_SMELTER_RECIPES)
        .recipeModifier((machine, recipe) => $SteamParallelMultiblockMachine.recipeModifier(machine, recipe, 1.5), true)
        .addOutputLimit($ItemRecipeCapability.CAP, 1)
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("FFF", "XXX", "XXX")
            .aisle("FFF", "X#X", "XXX")
            .aisle("FFF", "XSX", "XXX")
            .where("S", Predicates.controller(Predicates.blocks(definition.get())))
            .where("F", Predicates.blocks(GTBlocks.FIREBOX_BRONZE.get())
                .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1)))
            .where("X", Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS.get())
                .setMinGlobalLimited(6)
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS)))
            .where("#", Predicates.air())
            .where(" ", Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_bronze_plated_bricks", "gtceu:block/machines/alloy_smelter")
    
    event.create("steam_centrifuge", "multiblock", (holder) => new $SteamParallelMultiblockMachine(holder, 8))
        .rotationState(RotationState.ALL)
        .recipeType(GTRecipeTypes.ALLOY_SMELTER_RECIPES)
        .recipeModifier((machine, recipe) => $SteamParallelMultiblockMachine.recipeModifier(machine, recipe, 1.5), true)
        .addOutputLimit($ItemRecipeCapability.CAP, 1)
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAA", "AAA", "#B#") 
            .aisle("AAA", "A#A", "BBB") 
            .aisle("AAA", "A@A", "#B#") 
            .where("A", Predicates.blocks("gtceu:steam_machine_casing")
                .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS)))
            .where("B", Predicates.blocks("gtceu:steam_machine_casing"))
            .where("#", Predicates.any())
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_bronze_plated_bricks", "gtceu:block/machines/centrifuge")
})